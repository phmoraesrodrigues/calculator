export const addition = (number1: number, number2: number) => {
  return number1 + number2;
};

export const subtraction = (number1: number, number2: number) => {
  return number1 - number2;
};

export const multiplication = (number1: number, number2: number) => {
  return number1 * number2;
};

export const division = (number1: number, number2: number) => {
  if (number2 === 0) return NaN;

  return number1 / number2;
};
