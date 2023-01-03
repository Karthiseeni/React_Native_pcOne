export const isLowerCaseLetter = (pass) => /[a-z]/.test(pass);
export const isUpperCaseLetter = (pass) => /[A-Z]/.test(pass);
export const isNumericLetter = (pass) => /[0-9]/.test(pass);
export const isSpecialCharacter = (pass) => /[!!@#$%^&*]/.test(pass);