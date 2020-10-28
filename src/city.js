export const getOffersByCity = (city, locations) => {
  const currentLocation = locations.find((item) => {
    return item.title === city;
  });
  return currentLocation.offers;
};
