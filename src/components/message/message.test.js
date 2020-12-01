import React from "react";
import renderer from "react-test-renderer";
import {Message} from "./message";

it(`Should Message render correctly`, () => {
  const tree = renderer
    .create(<Message
      error={`Ошибка`}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

