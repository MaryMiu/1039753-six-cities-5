import React from "react";
import renderer from "react-test-renderer";
import {Sortlist} from "./sortlist";
import {activeSortType} from "../../mock/for-test";

const noop = () => {};

describe(`Sortlist render correctly`, () => {

  it(`Should opened Sortlist render correctly`, () => {
    const tree = renderer
    .create(<Sortlist
      opened={true}
      activeSortType={activeSortType}
      onOptionClick={noop}
      onClickToggle={noop}
    />)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should closed Sortlist render correctly`, () => {
    const tree = renderer
    .create(<Sortlist
      opened={false}
      activeSortType={activeSortType}
      onOptionClick={noop}
      onClickToggle={noop}
    />)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
