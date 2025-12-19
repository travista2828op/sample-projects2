import { Request, Response, NextFunction } from 'express';
import { ApiResponse } from '../types';

export interface AppError extends Error {
  status?: number;
  code?: string;
}

export function errorHandler(
  err: AppError,
  _req: Request,
  res: Response,
  _next: NextFunction
): void {
  console.error('Error:', err.message, err.code);

  const status = err.status || 500;
  const message = err.message || 'Internal server error';

  // Handle specific multer errors
  if (err.code === 'FILE_TOO_LARGE') {
    res.status(413).json({
      success: false,
      error: 'File size exceeds maximum limit (10MB)',
    } as ApiResponse);
    return;
  }

  if (err.code === 'LIMIT_FILE_COUNT') {
    res.status(400).json({
      success: false,
      error: 'Only one file can be uploaded at a time',
    } as ApiResponse);
    return;
  }

  if (err.message && err.message.includes('Unsupported file type')) {
    res.status(400).json({
      success: false,
      error: err.message,
    } as ApiResponse);
    return;
  }

  // Handle rate limit errors
  if (err.status === 429) {
    res.status(429).json({
      success: false,
      error: err.message,
    } as ApiResponse);
    return;
  }

  // Handle API errors
  if (err.message && err.message.includes('API')) {
    res.status(503).json({
      success: false,
      error: 'Vision API service error. Please try again later.',
    } as ApiResponse);
    return;
  }

  res.status(status).json({
    success: false,
    error: message,
  } as ApiResponse);
}
