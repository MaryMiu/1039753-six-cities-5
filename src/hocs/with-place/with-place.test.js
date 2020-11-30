import React from 'react';
import renderer from 'react-test-renderer';
import withPlace from './with-place';
import {Provider} from 'react-redux';
import configureStore from "redux-mock-store";
import {activeOffer} from "../../mock/for-test";

const MockComponent = () => {
  return <div />;
};

const MockComponentWrapped = withPlace(MockComponent);

describe(`Render withPlace connected to store`, () => {
  const mockStore = configureStore([]);
  let store = null;
  let MockComponentInStore = null;

  beforeEach(() => {
    store = mockStore({
      PROCESS: {
        activeOffer,
      }
    });

    store.dispatch = jest.fn();

    MockComponentInStore = renderer.create(
        <Provider store={store}>
          <MockComponentWrapped
            onMouse={() => {}}
          />
        </Provider>
    );
  });

  it(`Should withPlace connected to store render correctly`, () => {
    expect(MockComponentInStore.toJSON()).toMatchSnapshot();
  });
});

