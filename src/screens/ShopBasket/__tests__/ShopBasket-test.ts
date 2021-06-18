/**
 *
 * ShopBasket Test
 * @format
 *
 */

import React from 'react';
import renderer from 'react-test-renderer';

import ShopBasket from '../ShopBasket';

test('ShopBasket', () => {
  const tree = renderer
    .create(
      <ShopBasket />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
