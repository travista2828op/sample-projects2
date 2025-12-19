export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface UploadResponse {
  prompt: string;
  fileName: string;
  fileSize: number;
}
