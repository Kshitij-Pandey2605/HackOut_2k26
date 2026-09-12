/**
 * Form and input validation helpers
 */

export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

export const validatePositiveNumber = (val) => {
  const num = Number(val);
  return !isNaN(num) && num > 0;
};
