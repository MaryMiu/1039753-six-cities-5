import React from "react";
import {BrowserRouter as Router} from 'react-router-dom';
import renderer from "react-test-renderer";
import FavoritesLocation from "./favorites-location";
import {offers} from "../../mock/for-test";

describe(`FavoritesLocation render correctly`, () => {

  it(`FavoritesLocation with offers`, () => {
    const tree = renderer
    .create(
        <Router>
          <FavoritesLocation
            city={`Paris`}
            offers={offers}
          />
        </Router>)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`FavoritesLocation without offers`, () => {
    const tree = renderer
    .create(
        <Router>
          <FavoritesLocation
            city={`Paris`}
            offers={[]}
          />
        </Router>)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
