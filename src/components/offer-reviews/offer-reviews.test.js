import React from "react";
import renderer from "react-test-renderer";
import {OfferReviews} from "./offer-reviews";
import {AuthorizationStatus, reviews} from "../../mock/for-test";

jest.mock(`../offer-review/offer-review`, () => `OfferReview`);
jest.mock(`../reviews-form/reviews-form`, () => `ReviewsForm`);

describe(`OfferReviews render correctly`, () => {

  it(`Should OfferReviews render correctly when user auth`, () => {
    const tree = renderer
    .create(<OfferReviews
      reviews={reviews}
      authorizationStatus={AuthorizationStatus.AUTH}
    />)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should OfferReviews render correctly when user no auth`, () => {
    const tree = renderer
    .create(<OfferReviews
      reviews={reviews}
      authorizationStatus={AuthorizationStatus.NO_AUTH}
    />)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should OfferReviews render correctly when no comments`, () => {
    const tree = renderer
    .create(<OfferReviews
      reviews={[]}
      authorizationStatus={AuthorizationStatus.NO_AUTH}
    />)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
