/**
 *
 * ShopMain Test
 * @format
 *
 */

import React from 'react';
import renderer from 'react-test-renderer';

import ShopMain from '../ShopMain';

test('ShopMain', () => {
  const tree = renderer
    .create(
      <ShopMain />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
