import {extend} from "../../../utils";
import ActionType from "./../../constants";

const initialState = {
  offers: [],
};

const citiesData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return extend(state, {
        offers: action.payload,
      });
  }

  return state;
};

export {citiesData};
