import {extend} from "../../../utils";
import ActionType from "./../../constants";
import {AuthorizationStatus} from "../../../const";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  email: ``,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload,
      });
    case ActionType.ADD_EMAIL:
      return extend(state, {
        email: action.payload,
      });
  }

  return state;
};

export {user};
