import React from "react";
import renderer from "react-test-renderer";
import PlaceCard from "./place-card";
import {currentClasses, offer} from "../../mock/for-test";
import {BrowserRouter} from 'react-router-dom';

const noop = () => {};

jest.mock(`../favorite-button/favorite-button`, () => `FavoriteButton`);

it(`Should PlaceCard render correctly`, () => {
  const tree = renderer
    .create(<BrowserRouter><PlaceCard
      currentClasses={currentClasses}
      offer={offer}
      onMouse={noop}
    /></BrowserRouter>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

