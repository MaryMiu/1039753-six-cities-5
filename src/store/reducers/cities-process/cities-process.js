import {extend} from "../../../utils";
import ActionType from "./../../constants";
import {Sort, CITIES} from "../../../const";

const initialState = {
  activeCity: CITIES[0],
  activeOffer: {},
  activeSortType: Sort.POPULAR,
  error: ``,
};

const citiesProcess = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        activeCity: action.payload
      });
    case ActionType.GET_ACTIVE_OFFER:
      return extend(state, {
        activeOffer: action.payload
      });
    case ActionType.GET_ACTIVE_SORT:
      return extend(state, {
        activeSortType: action.payload
      });
    case ActionType.SHOW_ERROR:
      return extend(state, {
        error: action.payload
      });
  }

  return state;
};


export {citiesProcess};
