/**
 *
 * ProductCard Test
 * @format
 *
 */

import React from 'react';
import renderer from 'react-test-renderer';

import ProductCard from '../ProductCard';

test('ProductCard', () => {
  const tree = renderer
    .create(
      <ProductCard />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
