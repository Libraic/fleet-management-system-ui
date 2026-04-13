export interface InputProps {
  label: string;
  placeholder: string;
  value?: string;
  errorMessage?: string;
  setValue: (value: string) => void;
  formatFn?: (value: string) => string;
  sanitizeFn?: (value: string) => string;
}