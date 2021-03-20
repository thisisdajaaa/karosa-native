/**
 *
 * ShopPayment Test
 * @format
 *
 */

import React from 'react';
import renderer from 'react-test-renderer';

import ShopPayment from '../ShopPayment';

test('ShopPayment', () => {
  const tree = renderer
    .create(
      <ShopPayment />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
