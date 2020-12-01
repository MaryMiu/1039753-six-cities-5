import React from "react";
import renderer from "react-test-renderer";
import {MainEmpty} from "./main-empty";
import {activeCity} from "../../mock/for-test";

it(`Should MainEmpty render correctly`, () => {
  const tree = renderer
    .create(<MainEmpty
      activeCity={activeCity}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

