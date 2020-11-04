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

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

const getWeightForHightPrice = (priceA, priceB) => {
  if (priceA === null && priceB === null) {
    return 0;
  }

  if (priceA === null) {
    return 1;
  }

  if (priceB === null) {
    return -1;
  }

  return null;
};

export const sortPriceLowToHight = (priceA, priceB) => {
  const weight = getWeightForHightPrice(priceA.releaseDate, priceB.releaseDate);

  if (weight !== null) {
    return weight;
  }

  return priceB.price.getTime() - priceA.price.getTime();
};
