import {extend} from "../utils";
import ActionType from "./constants";
import {Sort, CITIES} from "../const";
import offers from "../mocks/offers";

const initialState = {
  activeCity: CITIES[0],
  offers,
  activeOffer: {},
  activeSortType: Sort.POPULAR
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        activeCity: action.payload
      });
    case ActionType.RESET_CITY:
      return extend({}, initialState
      );
    case ActionType.GET_ACTIVE_OFFER:
      return extend(state, {
        activeOffer: action.payload
      });
    case ActionType.GET_ACTIVE_SORT:
      return extend(state, {
        activeSortType: action.payload
      });
  }

  return state;
};


export {reducer};
