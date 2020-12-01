import ActionType from "./../../constants";
import {user} from './user';
import {AuthorizationStatus} from "../../../const";

it(`Reducer should update authorization status`, () => {
  expect(user({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    email: ``,
  }, {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: `AUTH`,
  })).toEqual({
    authorizationStatus: AuthorizationStatus.AUTH,
    email: ``,
  });
});

it(`Reducer should update user email`, () => {
  expect(user({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    email: ``,
  }, {
    type: ActionType.ADD_EMAIL,
    payload: `mail@example.com`,
  })).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    email: `mail@example.com`,
  });
});
