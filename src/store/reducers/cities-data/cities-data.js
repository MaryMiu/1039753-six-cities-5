import {extend} from "../../../utils";
import ActionType from "./../../constants";
import {offerAdaptToClient} from "../../../utils";

const initialState = {
  offers: [],
  offersNearby: [],
  offer: {},
  favoritesOffers: [],
};

const citiesData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return extend(state, {
        offers: action.payload.map(offerAdaptToClient),
      });
    case ActionType.LOAD_FAVORITE_OFFERS:
      return extend(state, {
        favoritesOffers: action.payload.map(offerAdaptToClient),
      });
    case ActionType.LOAD_NEARBY_OFFERS:
      return extend(state, {
        offersNearby: action.payload.map(offerAdaptToClient),
      });
    case ActionType.LOAD_OFFER:
      return extend(state, {
        offer: offerAdaptToClient(action.payload),
      });
  }

  return state;
};

export {citiesData};
