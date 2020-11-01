
import offers from "./mocks/offers";

export const getOffersByCity = (city) => {
  const currentOffers = offers.filter((offer) => {
    return offer.city === city;
  });
  return currentOffers;
};
