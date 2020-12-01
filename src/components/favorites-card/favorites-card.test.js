import React from "react";
import {BrowserRouter} from 'react-router-dom';
import renderer from "react-test-renderer";
import FavoritesCard from "./favorites-card";
import {offer} from "../../mock/for-test";

jest.mock(`../favorite-button/favorite-button`, () => `FavoriteButton`);

it(`FavoritesCard render correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <FavoritesCard
            offer={offer}
          />
        </BrowserRouter>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

