import React from "react";
import renderer from "react-test-renderer";
import {Header} from "./header";
import {AuthorizationStatus} from "../../mock/for-test";
import {BrowserRouter} from 'react-router-dom';

describe(`Header render correctly`, () => {

  it(`Should Header render correctly when user auth`, () => {
    const tree = renderer
    .create(<BrowserRouter><Header
      authorizationStatus={AuthorizationStatus.AUTH}
      email={`mail@example.com`}
    /></BrowserRouter>)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should Header render correctly when user no auth`, () => {
    const tree = renderer
    .create(<BrowserRouter><Header
      authorizationStatus={AuthorizationStatus.NO_AUTH}
      email={``}
    /></BrowserRouter>)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
