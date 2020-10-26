import {extend} from "../utils";
import {ActionType} from "./action";
import {Сities} from "../const";
import offers from "../mocks/offers";

const initialState = {
  city: Сities.PARIS,
  offersInCity: offers
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        city: action.payload
      });
    case ActionType.GET_OFFERS:
      return extend(state, {
        offersInCity: action.payload
      });
    case ActionType.RESET_CITY:
      return extend({}, initialState);
  }

  return state;
};


export {reducer};
