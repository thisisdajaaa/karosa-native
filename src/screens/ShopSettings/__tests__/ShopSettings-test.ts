/**
 *
 * ShopSettings Test
 * @format
 *
 */

import React from 'react';
import renderer from 'react-test-renderer';

import ShopSettings from '../ShopSettings';

test('ShopSettings', () => {
  const tree = renderer
    .create(
      <ShopSettings />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
