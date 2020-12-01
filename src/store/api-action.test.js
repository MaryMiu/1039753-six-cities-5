import {fetchOfferList, fetchOfferListNearby, fetchOffer, fetchFavoriteList, fetchComments, checkAuth, getFavorites} from "./api-actions";
import MockAdapter from "axios-mock-adapter";
import {APIRoute} from "../const";
import {createAPI} from "../services/api";
import ActionType from "./constants";
import {offer, offers, reviews, offersId} from '../mock/for-test';

const SUCCESS_CODE_REQUEST = 200;
const ERROR_CODE_REQUEST = 401;
const ID = 1;
const api = createAPI(() => {});

describe(`Async operation work correctly`, () => {

  it(`Should make a correct API call to /hotels`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersLoader = fetchOfferList();
    apiMock
      .onGet(APIRoute.HOTELS)
      .reply(SUCCESS_CODE_REQUEST, offers);

    return offersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS,
          payload: offers,
        });
      });
  });

  it(`Should make a correct API call to /hotels/:id/nearby`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersNearbyLoader = fetchOfferListNearby(ID);
    apiMock
      .onGet((`${APIRoute.HOTELS}/${ID}${APIRoute.NEARBY}`))
      .reply(SUCCESS_CODE_REQUEST, offers);

    return offersNearbyLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_NEARBY_OFFERS,
          payload: offers,
        });
      });
  });

  it(`Should make a correct API call to /hotels/:id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offerLoader = fetchOffer(ID);
    apiMock
      .onGet((`${APIRoute.HOTELS}/${ID}`))
      .reply(SUCCESS_CODE_REQUEST, offer);

    return offerLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFER,
          payload: offer,
        });
      });
  });

  it(`Should make a correct API call to /favorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoriteOffersLoader = fetchFavoriteList();
    apiMock
      .onGet(APIRoute.FAVORITE)
      .reply(SUCCESS_CODE_REQUEST, offers);

    return favoriteOffersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FAVORITE_OFFERS,
          payload: offers,
        });
      });
  });

  it(`Should make a correct API call post to /comments/:id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const commentsLoader = fetchComments(ID);
    apiMock
      .onGet(`${APIRoute.COMMENTS}/${ID}`)
      .reply(SUCCESS_CODE_REQUEST, reviews);

    return commentsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_COMMENTS,
          payload: reviews,
        });
      });
  });

  it(`Should make a error API call post to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const errorLoader = checkAuth();
    apiMock
      .onGet(APIRoute.LOGIN)
      .reply(ERROR_CODE_REQUEST);

    return errorLoader(dispatch, () => {}, api)
      .catch((error) => {
        expect(error).toEqual(error);
      });
  });

  it(`Should make a correct API call to /favorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoriteOffersLoader = fetchFavoriteList();
    apiMock
      .onGet(APIRoute.FAVORITE)
      .reply(SUCCESS_CODE_REQUEST, offers);

    return favoriteOffersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FAVORITE_OFFERS,
          payload: offers,
        });
      });
  });

  it(`Should make a correct API call to /favorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoriteUpdateLoader = getFavorites();
    apiMock
      .onGet(APIRoute.FAVORITE)
      .reply(SUCCESS_CODE_REQUEST, offers);

    return favoriteUpdateLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.UPDATE_FAVORITES,
          payload: offersId,
        });
      });
  });

});

