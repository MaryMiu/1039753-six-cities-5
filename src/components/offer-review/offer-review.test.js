import React from "react";
import renderer from "react-test-renderer";
import OfferReview from "./offer-review";
import {review} from "../../mock/for-test";

it(`Should OfferReview render correctly`, () => {
  const tree = renderer
    .create(<OfferReview
      review={review}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

