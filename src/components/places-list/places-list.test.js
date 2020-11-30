import React from "react";
import renderer from "react-test-renderer";
import {PlacesList} from "./places-list";
import {currentClasses, offers} from "../../mock/for-test";

const noop = () => {};

jest.mock(`../place-card/place-card`, () => `PlaceCard`);

it(`Should PlacesList render correctly`, () => {
  const tree = renderer
    .create(<PlacesList
      currentClasses={currentClasses}
      offers={offers}
      onMouse={noop}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

