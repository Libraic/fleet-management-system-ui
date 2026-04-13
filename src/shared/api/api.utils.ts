import type { HandleApiErrorOptions } from "./api.types.ts";

export function handleApiError<TFieldErrors extends Record<string, string>>({
  error,
  setFieldErrors,
  showToast,
}: HandleApiErrorOptions<TFieldErrors>) {
  if (error.type === "VALIDATION" && error.errors && setFieldErrors) {
    setFieldErrors(error.errors as TFieldErrors);
    return;
  }

  showToast(error.message);
}
