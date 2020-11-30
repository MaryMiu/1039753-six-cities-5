import ActionType from "./constants";
import {ActionCreator} from "./action";

describe(`ActionCreator work correctly`, () => {
  it(`ActionCreator for change city work correct`, () => {
    expect(ActionCreator.changeCity(`Paris`)).toEqual({
      type: ActionType.CHANGE_CITY,
      payload: `Paris`
    });
  });

  it(`ActionCreator for active offer work correct`, () => {
    expect(ActionCreator.getActiveOffer({fake: true})).toEqual({
      type: ActionType.GET_ACTIVE_OFFER,
      payload: {fake: true}
    });
  });

  it(`ActionCreator for active sort work correct`, () => {
    expect(ActionCreator.getActiveSort(`Popular`)).toEqual({
      type: ActionType.GET_ACTIVE_SORT,
      payload: `Popular`
    });
  });

  it(`ActionCreator for require authorization work correct`, () => {
    expect(ActionCreator.requireAuthorization(`AUTH`)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: `AUTH`
    });
  });

  it(`ActionCreator for load offers work correct`, () => {
    expect(ActionCreator.loadOffers([{fake: true}])).toEqual({
      type: ActionType.LOAD_OFFERS,
      payload: [{fake: true}]
    });
  });

  it(`ActionCreator for load favorite offers work correct`, () => {
    expect(ActionCreator.loadFavoriteOffers([{fake: true}])).toEqual({
      type: ActionType.LOAD_FAVORITE_OFFERS,
      payload: [{fake: true}]
    });
  });

  it(`ActionCreator for load comments work correct`, () => {
    expect(ActionCreator.loadComments([{fake: true}])).toEqual({
      type: ActionType.LOAD_COMMENTS,
      payload: [{fake: true}]
    });
  });

  it(`ActionCreator for load nearby offers work correct`, () => {
    expect(ActionCreator.loadNearbyOffers([{fake: true}])).toEqual({
      type: ActionType.LOAD_NEARBY_OFFERS,
      payload: [{fake: true}]
    });
  });

  it(`ActionCreator for load offer work correct`, () => {
    expect(ActionCreator.loadOffer({fake: true})).toEqual({
      type: ActionType.LOAD_OFFER,
      payload: {fake: true}
    });
  });

  it(`ActionCreator for show error correct`, () => {
    expect(ActionCreator.showError(`Error`)).toEqual({
      type: ActionType.SHOW_ERROR,
      payload: `Error`
    });
  });

  it(`ActionCreator for add email correct`, () => {
    expect(ActionCreator.addEmail(`mail@example.com`)).toEqual({
      type: ActionType.ADD_EMAIL,
      payload: `mail@example.com`
    });
  });

  it(`ActionCreator for add favorite correct`, () => {
    expect(ActionCreator.addFavorite(1)).toEqual({
      type: ActionType.ADD_FAVORITE,
      payload: 1
    });
  });

  it(`ActionCreator for delete favorite correct`, () => {
    expect(ActionCreator.deleteFavorite(1)).toEqual({
      type: ActionType.DELETE_FAVORITE,
      payload: 1
    });
  });

  it(`ActionCreator for update favotites correct`, () => {
    expect(ActionCreator.updateFavotites([1, 2, 3])).toEqual({
      type: ActionType.UPDATE_FAVORITES,
      payload: [1, 2, 3]
    });
  });

  it(`ActionCreator for redirect to route correct`, () => {
    expect(ActionCreator.redirectToRoute(`to`)).toEqual({
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: `to`
    });
  });
});
