import { Request, Response, NextFunction } from 'express';
import { ApiResponse } from '../types';

export interface AppError extends Error {
  status?: number;
  code?: string;
}

export function errorHandler(
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error('Error:', err.message, err.code);

  const status = err.status || 500;
  const message = err.message || 'Internal server error';

  // Handle specific multer errors
  if (err.code === 'FILE_TOO_LARGE') {
    return res.status(413).json({
      success: false,
      error: 'File size exceeds maximum limit (10MB)',
    } as ApiResponse);
  }

  if (err.code === 'LIMIT_FILE_COUNT') {
    return res.status(400).json({
      success: false,
      error: 'Only one file can be uploaded at a time',
    } as ApiResponse);
  }

  if (err.message && err.message.includes('Unsupported file type')) {
    return res.status(400).json({
      success: false,
      error: err.message,
    } as ApiResponse);
  }

  // Handle rate limit errors
  if (err.status === 429) {
    return res.status(429).json({
      success: false,
      error: err.message,
    } as ApiResponse);
  }

  // Handle API errors
  if (err.message && err.message.includes('API')) {
    return res.status(503).json({
      success: false,
      error: 'Vision API service error. Please try again later.',
    } as ApiResponse);
  }

  res.status(status).json({
    success: false,
    error: message,
  } as ApiResponse);
}
