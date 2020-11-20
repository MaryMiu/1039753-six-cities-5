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

export const getOffersByCity = createSelector(
    getOffers,
    getActiveCity,
    (offers, activeCity) => {
      return offers.filter((offer) => offer.city.name === activeCity);
    }
);
