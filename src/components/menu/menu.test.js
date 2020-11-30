import React from "react";
import renderer from "react-test-renderer";
import {Menu} from "./menu";
import {activeCity} from "../../mock/for-test";

const noop = () => {};

it(`Should Menu render correctly`, () => {
  const tree = renderer
    .create(<Menu
      onCityChange={noop}
      activeCity={activeCity}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

