import locations from "./mocks/locations";

export const getOffersByCity = (city) => {
  const currentLocation = locations.find((item) => {
    return item.title === city;
  });
  return currentLocation.offers;
};
