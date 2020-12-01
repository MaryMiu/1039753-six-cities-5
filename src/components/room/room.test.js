import React from "react";
import renderer from "react-test-renderer";
import {Room} from "./room";
import {offers, offer, reviews, match} from "../../mock/for-test";

const noop = () => {};

jest.mock(`../header/header`, () => `Header`);
jest.mock(`../offer-reviews/offer-reviews`, () => `OfferReviews`);
jest.mock(`../places-list/places-list`, () => `PlacesList`);
jest.mock(`../favorite-button/favorite-button`, () => `FavoriteButton`);
jest.mock(`../map/map`, () => `Map`);

describe(`Room render correctly`, () => {
  it(`Should Room render correctly with comments`, () => {
    const tree = renderer
    .create(<Room
      offers={offers}
      offer={offer}
      offersNearby={offers}
      comments={reviews}
      activeOffer={offer}
      fetchOfferAction={noop}
      fetchOffersNearbyAction={noop}
      fetchCommentsAction={noop}
      getActiveOfferAction={noop}
      match={match}
    />)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should Room render correctly without comments`, () => {
    const tree = renderer
    .create(<Room
      offers={offers}
      offer={offer}
      offersNearby={offers}
      comments={[]}
      activeOffer={offer}
      fetchOfferAction={noop}
      fetchOffersNearbyAction={noop}
      fetchCommentsAction={noop}
      getActiveOfferAction={noop}
      match={match}
    />)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
