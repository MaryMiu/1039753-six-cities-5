import React from "react";
import renderer from "react-test-renderer";
import {Login} from "./login";
import {AuthorizationStatus} from "../../mock/for-test";
import {BrowserRouter} from 'react-router-dom';

const noop = () => {};

jest.mock(`../header/header`, () => `Header`);

describe(`Login render correctly`, () => {

  it(`Should Login render correctly when user auth`, () => {
    const tree = renderer
    .create(<BrowserRouter><Login
      authorizationStatus={AuthorizationStatus.AUTH}
      onSubmit={noop}
    /></BrowserRouter>)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should Login render correctly when user no auth`, () => {
    const tree = renderer
    .create(<BrowserRouter><Login
      authorizationStatus={AuthorizationStatus.NO_AUTH}
      onSubmit={noop}
    /></BrowserRouter>)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
