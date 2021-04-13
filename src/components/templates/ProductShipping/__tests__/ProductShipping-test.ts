/**
 *
 * ProductShipping Test
 * @format
 *
 */

import React from 'react';
import renderer from 'react-test-renderer';

import ProductShipping from '../ProductShipping';

test('ProductShipping', () => {
  const tree = renderer
    .create(
      <ProductShipping />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
