import {getOffersByCity} from "../city";

export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`,
  RESET_CITY: `RESET_CITY`
};

export const ActionCreator = {
  changeCity: (cityName) => ({
    type: ActionType.CHANGE_CITY,
    payload: cityName,
  }),
  getOffers: (cityName) => ({
    type: ActionType.GET_OFFERS,
    payload: getOffersByCity(cityName),
  }),
  resetCity: () => ({
    type: ActionType.RESET_CITY,
  })
};
