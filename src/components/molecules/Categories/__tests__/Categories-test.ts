/**
 *
 * Categories Test
 * @format
 *
 */

import React from 'react';
import renderer from 'react-test-renderer';

import Categories from '../Categories';

test('Categories', () => {
  const tree = renderer
    .create(
      <Categories />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
