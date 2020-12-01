import ActionType from "./constants";

export const ActionCreator = {
  changeCity: (cityName) => ({
    type: ActionType.CHANGE_CITY,
    payload: cityName,
  }),
  getActiveOffer: (offer) => ({
    type: ActionType.GET_ACTIVE_OFFER,
    payload: offer,
  }),
  getActiveSort: (type) => ({
    type: ActionType.GET_ACTIVE_SORT,
    payload: type,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  }),
  loadFavoriteOffers: (offers) => ({
    type: ActionType.LOAD_FAVORITE_OFFERS,
    payload: offers,
  }),
  loadComments: (comments) => ({
    type: ActionType.LOAD_COMMENTS,
    payload: comments,
  }),
  loadNearbyOffers: (offers) => ({
    type: ActionType.LOAD_NEARBY_OFFERS,
    payload: offers,
  }),
  loadOffer: (offer) => ({
    type: ActionType.LOAD_OFFER,
    payload: offer,
  }),
  showError: (err) => ({
    type: ActionType.SHOW_ERROR,
    payload: err,
  }),
  addEmail: (email) => ({
    type: ActionType.ADD_EMAIL,
    payload: email,
  }),
  addFavorite: (offerId) => ({
    type: ActionType.ADD_FAVORITE,
    payload: offerId,
  }),
  deleteFavorite: (offerId) => ({
    type: ActionType.DELETE_FAVORITE,
    payload: offerId,
  }),
  updateFavotites: (offersIds) => ({
    type: ActionType.UPDATE_FAVORITES,
    payload: offersIds,
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
};
