import ActionType from "./../../constants";
import {favorites} from './favorites';
import {favoriteIds} from '../../../mock/for-test';

it(`Reducer should add favorite id`, () => {
  expect(favorites({
    favoriteIds: [],
  }, {
    type: ActionType.ADD_FAVORITE,
    payload: 1,
  })).toEqual({
    favoriteIds: [1]
  });
});

it(`Reducer should remove favorite id`, () => {
  expect(favorites({
    favoriteIds: [1],
  }, {
    type: ActionType.DELETE_FAVORITE,
    payload: 1,
  })).toEqual({
    favoriteIds: []
  });
});

it(`Reducer should update favorite ids`, () => {
  expect(favorites({
    favoriteIds: [],
  }, {
    type: ActionType.UPDATE_FAVORITES,
    payload: favoriteIds,
  })).toEqual({
    favoriteIds
  });
});

