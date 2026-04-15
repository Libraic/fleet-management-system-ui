export interface ApiResult<T> {
  isOk: boolean;
  data: T;
}

export type ErrorType = "VALIDATION" | "GENERAL" | "SYSTEM";

export interface ApiError {
  message: string;
  type: ErrorType;
  errors?: Record<string, string>;
}

export interface HandleApiErrorOptions<TFieldErrors> {
  error: ApiError;
  setFieldErrors?: (errors: TFieldErrors) => void;
  showToast: (message: string) => void;
}

export interface PageResponse<T> {
  content: T[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
}
