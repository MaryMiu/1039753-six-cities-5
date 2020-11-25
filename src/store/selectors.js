import {NameSpace} from "../store/reducers/root-reducer";
import {createSelector} from "reselect";

export const getOffers = (state) => {
  return state[NameSpace.DATA].offers;
};

export const getActiveCity = (state) => {
  return state[NameSpace.PROCESS].activeCity;
};

export const getActiveSortType = (state) => {
  return state[NameSpace.PROCESS].activeSortType;
};

export const getErrorMessage = (state) => {
  return state[NameSpace.PROCESS].error;
};

export const getAuthorizationStatus = (state) => {
  return state[NameSpace.USER].authorizationStatus;
};

export const getUserEmail = (state) => {
  return state[NameSpace.USER].email;
};

export const getComments = (state) => {
  return state[NameSpace.COMMENTS].comments;
};

export const getOffersByCity = createSelector(
    getOffers,
    getActiveCity,
    (offers, activeCity) => {
      return offers.filter((offer) => offer.city.name === activeCity);
    }
);
