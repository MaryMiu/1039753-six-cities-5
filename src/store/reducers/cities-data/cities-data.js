import {extend} from "../../../utils";
import ActionType from "./../../constants";
import {AuthorizationStatus} from "../../../const";

const initialState = {
  offers: [],
  authorizationStatus: AuthorizationStatus.NO_AUTH
};

const citiesData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload,
      });
    case ActionType.LOAD_OFFERS:
      return extend(state, {
        offers: action.payload,
      });
  }

  return state;
};

export {citiesData};
