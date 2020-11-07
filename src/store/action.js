import ActionType from "./constants";

export const ActionCreator = {
  changeCity: (cityName) => ({
    type: ActionType.CHANGE_CITY,
    payload: cityName,
  }),
  resetCity: () => ({
    type: ActionType.RESET_CITY,
  }),
  getActiveOffer: (offer) => ({
    type: ActionType.GET_ACTIVE_OFFER,
    payload: offer,
  }),
  getActiveSort: (type) => ({
    type: ActionType.GET_ACTIVE_SORT,
    payload: type,
  })
};
