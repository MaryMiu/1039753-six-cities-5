import {extend} from "../utils";
import {ActionType} from "./action";
import {Сities} from "../const";
import offers from "../mocks/offers";

const initialState = {
  city: Сities.AMSTERDAM,
  offersInCity: offers
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        city: state.city + action.payload
      });
    case ActionType.GET_OFFERS:
      return extend(state, {
        offersInCity: state.offersInCity + action.payload
      });
  }

  return state;
};


export {reducer};
