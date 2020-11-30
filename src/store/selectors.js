import {NameSpace} from "../store/reducers/root-reducer";
import {createSelector} from "reselect";

export const getOffers = (state) => {
  return state[NameSpace.DATA].offers;
};

export const getOffersNearby = (state) => {
  return state[NameSpace.DATA].offersNearby;
};

export const getOffer = (state) => {
  return state[NameSpace.DATA].offer;
};

export const getFavoriteOffers = (state) => {
  return state[NameSpace.DATA].favoritesOffers;
};

export const getActiveCity = (state) => {
  return state[NameSpace.PROCESS].activeCity;
};

export const getActiveSortType = (state) => {
  return state[NameSpace.PROCESS].activeSortType;
};

export const getActiveOffer = (state) => {
  return state[NameSpace.PROCESS].activeOffer;
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

export const getFavoriteIds = (state) => {
  return state[NameSpace.FAVORITES].favoriteIds;
};


export const getOffersByCity = createSelector(
    getOffers,
    getActiveCity,
    (offers, activeCity) => {
      return offers.filter((offer) => offer.city.name === activeCity);
    }
);
