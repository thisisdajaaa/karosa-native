/**
 *
 * ShopProductDetails Test
 * @format
 *
 */

import React from 'react';
import renderer from 'react-test-renderer';

import ShopProductDetails from '../ShopProductDetails';

test('ShopProductDetails', () => {
  const tree = renderer
    .create(
      <ShopProductDetails />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
