import express, { Request, Response, NextFunction } from 'express';
import multer, { Multer, FileFilterCallback } from 'multer';
import rateLimit from 'express-rate-limit';
import { generatePrompt } from '../services/visionService';
import { ApiResponse } from '../types';

const router = express.Router();

// Configure rate limiting
const uploadLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: parseInt(process.env.RATE_LIMIT || '30', 10),
  message: 'Too many upload requests, please try again later',
  standardHeaders: true,
  legacyHeaders: false,
});

// Configure multer for file upload
const storage = multer.memoryStorage();

const fileFilter = (
  req: Request,
  file: Express.Multer.File,
  cb: FileFilterCallback
) => {
  const allowedMimes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
  
  if (allowedMimes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error(`Unsupported file type: ${file.mimetype}`));
  }
};

const upload: Multer = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: parseInt(process.env.MAX_FILE_SIZE || '10485760', 10),
  },
});

// Upload endpoint
router.post(
  '/',
  uploadLimiter,
  upload.single('image'),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.file) {
        return res.status(400).json({
          success: false,
          error: 'No image file provided',
        } as ApiResponse);
      }

      const buffer = req.file.buffer;
      const base64Image = buffer.toString('base64');
      const mimeType = req.file.mimetype;

      const prompt = await generatePrompt(base64Image, mimeType);

      res.json({
        success: true,
        data: {
          prompt,
          fileName: req.file.originalname,
          fileSize: req.file.size,
        },
      } as ApiResponse);
    } catch (error) {
      next(error);
    }
  }
);

export default router;
