import { FieldError } from 'react-hook-form';

export const getErrorMessage = (
  error: FieldError | undefined
): string | null => {
  if (!error) return null;

  if (typeof error.message === 'string') return error.message;

  return JSON.stringify(error.message);
};
