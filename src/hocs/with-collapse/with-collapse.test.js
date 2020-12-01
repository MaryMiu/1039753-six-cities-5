import React from 'react';
import renderer from 'react-test-renderer';
import withCollapse from './with-collapse';

const MockComponent = () => {
  return <div />;
};

const MockComponentWrapped = withCollapse(MockComponent);

it(`withCollapse is render correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped
      opened={true}
      onClickToggle={() => {}}
    />
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
