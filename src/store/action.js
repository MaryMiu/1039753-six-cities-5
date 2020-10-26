import {Сities} from "../const";

export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`,
  RESET_CITY: `RESET_CITY`
};

export const ActionCreator = {
  changeCity: () => ({
    type: ActionType.CHANGE_CITY,
    payload: Сities.PARIS,
  }),
  resetCity: () => ({
    type: ActionType.RESET_CITY,
  })
};
