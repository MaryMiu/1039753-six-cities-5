import ActionType from "./../../constants";
import {citiesData} from './cities-data';
import {offers, offer} from '../../../mock/for-test';
import {offerAdaptToClient} from "../../../utils";

it(`Reducer should update offers by load load`, () => {
  expect(citiesData({
    offers: [],
    offersNearby: [],
    offer: {},
    favoritesOffers: [],
  }, {
    type: ActionType.LOAD_OFFERS,
    payload: offers.map(offerAdaptToClient),
  })).toEqual({
    offers: offers.map(offerAdaptToClient),
    offersNearby: [],
    offer: {},
    favoritesOffers: [],
  });
});

it(`Reducer should update offers nearby by load load nearby`, () => {
  expect(citiesData({
    offers: [],
    offersNearby: [],
    offer: {},
    favoritesOffers: [],
  }, {
    type: ActionType.LOAD_NEARBY_OFFERS,
    payload: offers.map(offerAdaptToClient),
  })).toEqual({
    offers: [],
    offersNearby: offers.map(offerAdaptToClient),
    offer: {},
    favoritesOffers: [],
  });
});

it(`Reducer should update favorite offers by load favorite offers`, () => {
  expect(citiesData({
    offers: [],
    offersNearby: [],
    offer: {},
    favoritesOffers: [],
  }, {
    type: ActionType.LOAD_FAVORITE_OFFERS,
    payload: offers.map(offerAdaptToClient),
  })).toEqual({
    offers: [],
    offersNearby: [],
    offer: {},
    favoritesOffers: offers.map(offerAdaptToClient),
  });
});

it(`Reducer should update offer by load offer`, () => {
  expect(citiesData({
    offers: [],
    offersNearby: [],
    offer: {},
    favoritesOffers: [],
  }, {
    type: ActionType.LOAD_OFFER,
    payload: offerAdaptToClient(offer),
  })).toEqual({
    offers: [],
    offersNearby: [],
    offer: offerAdaptToClient(offer),
    favoritesOffers: [],
  });
});
