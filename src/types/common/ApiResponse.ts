// Wraps all API responses
export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}
