/**
 *
 * ProductStatus Test
 * @format
 *
 */

import React from 'react';
import renderer from 'react-test-renderer';

import ProductStatus from '../ProductStatus';

test('ProductStatus', () => {
  const tree = renderer
    .create(
      <ProductStatus />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
