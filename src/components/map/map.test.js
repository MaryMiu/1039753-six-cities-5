import React from "react";
import renderer from "react-test-renderer";
import {Map} from "./map";
import {mapStyle, offer, offers} from "../../mock/for-test";

it(`Should Map render correctly`, () => {
  const tree = renderer
    .create(<Map
      mapStyle={mapStyle}
      activeOffer={offer}
      offers={offers}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

