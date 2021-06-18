/**
 *
 * BasketItems Test
 * @format
 *
 */

import React from 'react';
import renderer from 'react-test-renderer';

import BasketItems from '../BasketItems';

test('BasketItems', () => {
  const tree = renderer
    .create(
      <BasketItems />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
