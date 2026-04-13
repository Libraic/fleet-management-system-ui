import { BLANK_STRING, COMMA } from "../../../../shared/constants/constants.ts";

export const formatRegistrationNumber = (registrationNumber: string) => {
  const sanitized = sanitizeRegistrationNumber(registrationNumber);
  const upperCase = sanitized.toUpperCase();
  if (upperCase.length > 3) {
    return `${upperCase.slice(0, 3)} ${upperCase.slice(3)}`;
  }

  return upperCase;
};

export const formatMileage = (mileage: string) => {
  const sanitized = sanitizeMileage(mileage);
  return sanitized.replace(/\B(?=(\d{3})+(?!\d))/g, COMMA);
};

export const sanitizeMileage = (mileage: string) => mileage.replace(/,/g, BLANK_STRING);

export const sanitizeRegistrationNumber = (registrationNumber: string) => registrationNumber.replace(/\s+/g, BLANK_STRING).toUpperCase();