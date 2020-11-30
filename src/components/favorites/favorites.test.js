import React from "react";
import renderer from "react-test-renderer";
import {Favorites} from "./favorites";
import {offers} from "../../mock/for-test";
import {favoriteIds} from "../../mock/for-test";

const noop = () => {};

jest.mock(`../header/header`, () => `Header`);
jest.mock(`../favorites-location/favorites-location`, () => `FavoritesLocation`);
jest.mock(`../favorites-empty/favorites-empty`, () => `FavoritesEmpty`);

describe(`Header render correctly`, () => {

  it(`Should Favorites render correctly with offers`, () => {
    const tree = renderer
    .create(<Favorites
      favoritesOffers={offers}
      favoriteIds={favoriteIds}
      fetchFavoriteListAction={noop}
    />)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should Favorites render correctly without offers`, () => {
    const tree = renderer
    .create(<Favorites
      favoritesOffers={[]}
      favoriteIds={favoriteIds}
      fetchFavoriteListAction={noop}
    />)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
