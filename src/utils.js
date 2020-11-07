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

const getWeightForItems = (itemA, itemB) => {
  if (itemA === null && itemB === null) {
    return 0;
  }

  if (itemA === null) {
    return 1;
  }

  if (itemB === null) {
    return -1;
  }

  return null;
};

export const sortRatingDown = (offerA, offerB) => {
  const weight = getWeightForItems(offerA.rating, offerB.rating);

  if (weight !== null) {
    return weight;
  }

  return offerB.rating - offerA.rating;
};

export const sortPriceLowToHight = (offerA, offerB) => {
  const weight = getWeightForItems(offerA.price, offerB.price);

  if (weight !== null) {
    return weight;
  }

  return offerA.price - offerB.price;
};

export const sortPriceHightToLow = (offerA, offerB) => {
  const weight = getWeightForItems(offerA.price, offerB.price);

  if (weight !== null) {
    return weight;
  }

  return offerB.price - offerA.price;
};
