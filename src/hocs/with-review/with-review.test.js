import React from 'react';
import renderer from 'react-test-renderer';
import withReview from './with-review';

const MockComponent = () => {
  return <div />;
};

const MockComponentWrapped = withReview(MockComponent);

it(`withReview is render correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped
      rating={5}
      comment={`Тест`}
      isDisabled={true}
      onChangeForm={() => {}}
      onChangeDisabledState={() => {}}
      resetForm={() => {}}
    />
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
