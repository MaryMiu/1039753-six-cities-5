import ActionType from "./constants";

export const ActionCreator = {
  changeCity: (cityName) => ({
    type: ActionType.CHANGE_CITY,
    payload: cityName,
  }),
  resetCity: () => ({
    type: ActionType.RESET_CITY,
  })
};
