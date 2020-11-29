import React from "react";
import {BrowserRouter as Router} from 'react-router-dom';
import renderer from "react-test-renderer";
import FavoritesCard from "./favorites-card";
import {offer} from "../../mock/for-test";

it(`FavoritesCard render correctly`, () => {
  const tree = renderer
    .create(
        <Router>
          <FavoritesCard
            offer={offer}
          />
        </Router>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

