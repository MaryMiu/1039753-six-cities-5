import {extend} from "../../../utils";
import ActionType from "./../../constants";
import {adaptToClient} from "../../../utils";

const initialState = {
  offers: [],
};

const citiesData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return extend(state, {
        offers: action.payload.map(adaptToClient),
      });
  }

  return state;
};

export {citiesData};
