/**
 *
 * ShopAddress Test
 * @format
 *
 */

import React from 'react';
import renderer from 'react-test-renderer';

import ShopAddress from '../ShopAddress';

test('ShopAddress', () => {
  const tree = renderer
    .create(
      <ShopAddress />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
