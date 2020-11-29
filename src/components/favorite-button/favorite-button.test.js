import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import FavoriteButton, {FavoriteButton as FavoriteButtonWithoutStore} from "./favorite-button";
import configureStore from "redux-mock-store";
import {favoriteIds} from "../../mock/for-test";

const noop = () => {};

it(`FavoriteButton render correctly`, () => {
  const tree = renderer
    .create(<FavoriteButtonWithoutStore
      favoriteIds={favoriteIds}
      btnType={`place-card`}
      offerId={12}
      removeFavorite={noop}
      setFavorite={noop}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

describe(`Render connected to store component`, () => {
  const mockStore = configureStore([]);
  let store = null;
  let favoriteButtonComponent = null;

  beforeEach(() => {
    store = mockStore({
      FAVORITES: {
        favoriteIds,
      }
    });

    store.dispatch = jest.fn();

    favoriteButtonComponent = renderer.create(
        <Provider store={store}>
          <FavoriteButton
            btnType={`place-card`}
            offerId={12}
            removeFavorite={noop}
            setFavorite={noop}
          />
        </Provider>
    );
  });

  it(`Should FavoriteButton connected to store render correctly`, () => {
    expect(favoriteButtonComponent.toJSON()).toMatchSnapshot();
  });

  it(`Should call dispatch when button click`, () => {
    renderer.act(() => {
      favoriteButtonComponent.root.findByType(`button`).props.onClick();
    });

    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });

});
