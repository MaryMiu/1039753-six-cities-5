import ActionType from "./../../constants";
import {citiesProcess} from './cities-process';
import {offer} from '../../../mock/for-test';

it(`Reducer should change city`, () => {
  expect(citiesProcess({
    activeCity: `Paris`,
    activeOffer: {},
    activeSortType: `Popular`,
    error: ``,
  }, {
    type: ActionType.CHANGE_CITY,
    payload: `Amsterdam`,
  })).toEqual({
    activeCity: `Amsterdam`,
    activeOffer: {},
    activeSortType: `Popular`,
    error: ``,
  });
});

it(`Reducer should change active offer`, () => {
  expect(citiesProcess({
    activeCity: `Paris`,
    activeOffer: {},
    activeSortType: `Popular`,
    error: ``,
  }, {
    type: ActionType.GET_ACTIVE_OFFER,
    payload: offer,
  })).toEqual({
    activeCity: `Paris`,
    activeOffer: offer,
    activeSortType: `Popular`,
    error: ``,
  });
});

it(`Reducer should change active sort`, () => {
  expect(citiesProcess({
    activeCity: `Paris`,
    activeOffer: {},
    activeSortType: `Popular`,
    error: ``,
  }, {
    type: ActionType.GET_ACTIVE_SORT,
    payload: `Price: low to high`,
  })).toEqual({
    activeCity: `Paris`,
    activeOffer: {},
    activeSortType: `Price: low to high`,
    error: ``,
  });
});

it(`Reducer should change error text`, () => {
  expect(citiesProcess({
    activeCity: `Paris`,
    activeOffer: {},
    activeSortType: `Popular`,
    error: ``,
  }, {
    type: ActionType.SHOW_ERROR,
    payload: `Error`,
  })).toEqual({
    activeCity: `Paris`,
    activeOffer: {},
    activeSortType: `Popular`,
    error: `Error`,
  });
});


