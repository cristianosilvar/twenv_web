export interface ApiResponseModel<T = any> {
  success: boolean;
  message: string;
  data: T;
}
