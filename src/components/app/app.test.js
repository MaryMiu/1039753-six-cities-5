
import React from "react";
import renderer from "react-test-renderer";
import App from "./app";

jest.mock(`../message/message`, () => `Message`);
jest.mock(`../main/main`, () => `Main`);
jest.mock(`../login/login`, () => `Login`);
jest.mock(`../private-route/private-route`, () => `PrivateRoute`);
jest.mock(`../favorites/favorites`, () => `Favorites`);
jest.mock(`../room/room`, () => `Room`);

test(`App render`, () => {
  const tree = renderer
    .create(<App
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
