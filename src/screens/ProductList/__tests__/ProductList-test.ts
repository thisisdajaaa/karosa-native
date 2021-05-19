/**
 *
 * ProductList Test
 * @format
 *
 */

import React from 'react';
import renderer from 'react-test-renderer';

import ProductList from '../ProductList';

test('ProductList', () => {
  const tree = renderer
    .create(
      <ProductList />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
