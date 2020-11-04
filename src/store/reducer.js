import {extend} from "../utils";
import ActionType from "./constants";
import {CITIES} from "../const";
import offers from "../mocks/offers";

const initialState = {
  activeCity: CITIES[0],
  offers
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        activeCity: action.payload
      });
    case ActionType.RESET_CITY:
      return extend({}, initialState);
  }

  return state;
};


export {reducer};
