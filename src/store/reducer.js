import {extend} from "../utils";
import ActionType from "./constants";
import {CITIES} from "../const";
import {getOffersByCity} from "../city";

const initialState = {
  city: CITIES[0],
  offers: getOffersByCity(CITIES[0])
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        city: action.payload
      });
    case ActionType.GET_OFFERS:
      return extend(state, {
        offers: action.payload
      });
    case ActionType.RESET_CITY:
      return extend({}, initialState);
  }

  return state;
};


export {reducer};
