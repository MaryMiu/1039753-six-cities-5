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

export const sortDateNewByOld = (reviewA, reviewB) => {
  const dateA = new Date(reviewA.date);
  const dateB = new Date(reviewB.date);

  const weight = getWeightForItems(dateA, dateB);

  if (weight !== null) {
    return weight;
  }

  return dateB.getTime() - dateA.getTime();
};

export const arrayEqual = (array1, array2) => array1.length === array2.length && array1.every((value, index) => value === array2[index]);

export const offerAdaptToClient = (offer) => {
  const adaptOffer = Object.assign({}, offer, {
    isPremium: offer.is_premium,
    isFavorite: offer.is_favorite,
    maxAdults: offer.max_adults,
    previewImage: offer.preview_image,
    type: (offer.type).toUpperCase(),
    host: {
      avatarUrl: offer.host.avatar_url,
      isPro: offer.host.is_pro,
    }
  });

  delete adaptOffer.is_premium;
  delete adaptOffer.is_favorite;
  delete adaptOffer.max_adults;
  delete adaptOffer.preview_image;
  delete adaptOffer.host.avatar_url;
  delete adaptOffer.host.is_pro;

  return adaptOffer;
};

export const offerAdaptToServer = (offer) => {
  const adaptedOffer = Object.assign({}, offer, {
    "is_premium": offer.isPremium,
    "is_favorite": offer.isFavorite,
    "max_adults": offer.maxAdults,
    "preview_image": offer.previewImage,
    "type": (offer.type).toLowerCase(),
    "host": {
      "avatar_url": offer.host.avatarUrl,
      "is_pro": offer.host.isPro,
    }
  });

  delete adaptedOffer.isPremium;
  delete adaptedOffer.isFavorite;
  delete adaptedOffer.maxAdults;
  delete adaptedOffer.previewImage;
  delete adaptedOffer.host.avatarUrl;
  delete adaptedOffer.host.isPro;

  return adaptedOffer;
};

export const commentAdaptToClient = (comment) => {
  const adaptComment = Object.assign({}, comment, {
    user: {
      avatarUrl: comment.user.avatar_url,
      isPro: comment.user.is_pro
    }
  });

  delete adaptComment.user.avatar_url;
  delete adaptComment.user.is_pro;

  return adaptComment;
};

export const commentAdaptToServer = (comment) => {
  const adaptedComment = Object.assign({}, comment, {
    user: {
      "avatar_url": comment.avatarUrl,
      "is_pro": comment.isPro,
    }
  });

  delete adaptedComment.avatarUrl;
  delete adaptedComment.isPro;

  return adaptedComment;
};
