import React from "react";
import renderer from "react-test-renderer";
import {ReviewsForm} from "./reviews-form";
import {offer} from "../../mock/for-test";

const noop = () => {};

it(`Should ReviewsForm render correctly`, () => {
  const tree = renderer
    .create(<ReviewsForm
      activeOffer={offer}
      onChangeForm={noop}
      onChangeDisabledState={noop}
      resetForm={noop}
      sendCommentAction={noop}
      rating={2}
      comment={`Test`}
      isDisabled={true}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

