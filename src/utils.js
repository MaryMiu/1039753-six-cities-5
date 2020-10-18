export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const getRandomFloatingPointNumber = (min, max) => {
  return min + Math.random() * (max - min);
};

export const formatFloatingPointNumberToPercent = (num) => {
  return num * 10 * 2;
};
