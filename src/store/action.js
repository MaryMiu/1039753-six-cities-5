import {getOffersByCity} from "../city";
import ActionType from "./constants";

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
