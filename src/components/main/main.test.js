import React from "react";
import renderer from "react-test-renderer";
import {Main} from "./main";
import {AuthorizationStatus, activeCity, offers, activeSortType} from "../../mock/for-test";

const noop = () => {};

jest.mock(`../header/header`, () => `Header`);
jest.mock(`../places-list/places-list`, () => `PlacesList`);
jest.mock(`../sortlist/sortlist`, () => `Sortlist`);
jest.mock(`../map/map`, () => `Map`);
jest.mock(`../menu/menu`, () => `Menu`);
jest.mock(`../main-empty/main-empty`, () => `MainEmpty`);

describe(`Main render correctly`, () => {

  it(`Should Main render correctly with offers`, () => {
    const tree = renderer
    .create(<Main
      authorizationStatus={AuthorizationStatus.AUTH}
      onSubmit={noop}
      activeCity={activeCity}
      offers={offers}
      activeSortType={activeSortType}
      fetchOfferListAction={noop}
    />)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should Main render correctly without offers`, () => {
    const tree = renderer
    .create(<Main
      authorizationStatus={AuthorizationStatus.AUTH}
      onSubmit={noop}
      activeCity={activeCity}
      offers={[]}
      activeSortType={activeSortType}
      fetchOfferListAction={noop}
    />)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
