export interface UploadResponse {
  success: boolean;
  data?: {
    prompt: string;
    fileName: string;
    fileSize: number;
  };
  error?: string;
}

export interface PromptState {
  prompt: string | null;
  fileName: string | null;
  loading: boolean;
  error: string | null;
}
