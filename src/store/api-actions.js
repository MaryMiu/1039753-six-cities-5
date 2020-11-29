import {ActionCreator} from "./action";
import {AuthorizationStatus, APIRoute, AppRoute} from "../const";


export const fetchOfferList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.HOTELS)
    .then(({data}) => dispatch(ActionCreator.loadOffers(data)))
    .catch((err) => {
      dispatch(ActionCreator.showError(err.message));
    })
);

export const fetchOfferListNearby = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.HOTELS}/${id}${APIRoute.NEARBY}`)
    .then(({data}) => dispatch(ActionCreator.loadNearbyOffers(data)))
    .catch((err) => {
      dispatch(ActionCreator.showError(err.message));
    })
);

export const fetchOffer = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.HOTELS}/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadOffer(data)))
    .catch((err) => {
      dispatch(ActionCreator.showError(err.message));
    })
);

export const fetchFavoriteList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITE)
    .then(({data}) => {
      dispatch(ActionCreator.loadFavoriteOffers(data));
    })
    .catch((err) => {
      dispatch(ActionCreator.showError(err.message));
    })
);


export const fetchComments = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.COMMENTS}/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadComments(data)))
    .catch((err) => {
      dispatch(ActionCreator.showError(err.message));
    })
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => {
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(ActionCreator.addEmail(data.email));
      dispatch(getFavorites());
    })
    .catch((err) => {
      dispatch(ActionCreator.showError(err.message));
    })
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(() => {
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(ActionCreator.addEmail(email));
      dispatch(getFavorites());
      dispatch(ActionCreator.redirectToRoute(AppRoute.ROOT));
    })
    .catch((err) => {
      dispatch(ActionCreator.showError(err.message));
    })
);

export const getFavorites = () => (dispatch, _getState, api) => {
  return api.get(APIRoute.FAVORITE)
    .then(({data}) => {
      dispatch(ActionCreator.updateFavotites(data.map((offer) => offer.id)));
    })
    .catch(() => {
      dispatch(ActionCreator.updateFavotites([]));
    });
};

export const changeFavorite = ({offerId, status}) => (dispatch, getState, api) => {
  if (getState().USER.authorizationStatus === AuthorizationStatus.AUTH) {
    return api.post(`${APIRoute.FAVORITE}/${offerId}/${status}`)
    .then(({data}) => {
      if (data[`is_favorite`]) {
        dispatch(ActionCreator.addFavorite(data.id));
      } else {
        dispatch(ActionCreator.deleteFavorite(data.id));
      }
    })
    .catch((err) => {
      dispatch(ActionCreator.showError(err.message));
    });
  } else {
    return dispatch(ActionCreator.redirectToRoute(AppRoute.LOGIN));
  }
};

export const sendComment = (id, rating, comment) => (dispatch, _getState, api) => {
  return api.post(`${APIRoute.COMMENTS}/${id}`, {rating, comment})
    .then(() => {
      dispatch(fetchComments(id));
    })
    .catch((err) => {
      dispatch(ActionCreator.showError(err.message));
    });
};

