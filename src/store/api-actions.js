import {ActionCreator} from "./action";
import {AuthorizationStatus} from "../const";

export const fetchOfferList = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => dispatch(ActionCreator.loadOffers(data)))
    .catch((err) => {
      dispatch(ActionCreator.showError(err.message));
    })
);

export const fetchOfferListNearby = (id) => (dispatch, _getState, api) => (
  api.get(`/hotels/${id}/nearby`)
    .then(({data}) => dispatch(ActionCreator.loadNearbyOffers(data)))
    .catch((err) => {
      dispatch(ActionCreator.showError(err.message));
    })
);

export const fetchOffer = (id) => (dispatch, _getState, api) => (
  api.get(`/hotels/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadOffer(data)))
    .catch((err) => {
      dispatch(ActionCreator.showError(err.message));
    })
);

export const fetchFavoriteList = () => (dispatch, _getState, api) => (
  api.get(`/favorite`)
    .then(({data}) => {
      dispatch(ActionCreator.loadFavoriteOffers(data));
    })
    .catch((err) => {
      dispatch(ActionCreator.showError(err.message));
    })
);


export const fetchComments = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadComments(data)))
    .catch((err) => {
      dispatch(ActionCreator.showError(err.message));
    })
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(({data}) => {
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(ActionCreator.addEmail(data.email));
    })
    .catch((err) => {
      dispatch(ActionCreator.showError(err.message));
    })
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => {
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(ActionCreator.addEmail(email));
    })
    .catch((err) => {
      dispatch(ActionCreator.showError(err.message));
    })
);
