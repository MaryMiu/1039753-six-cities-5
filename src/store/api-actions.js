import {ActionCreator} from "./action";
import {AuthorizationStatus} from "../const";

export const fetchOfferList = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => dispatch(ActionCreator.loadOffers(data)))
    .catch((err) => {
      dispatch(ActionCreator.showError(err.message));
    })
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch((err) => {
      dispatch(ActionCreator.showError(err.message));
    })
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch((err) => {
      dispatch(ActionCreator.showError(err.message));
    })
);
