/**
 *
 * ProductNew Test
 * @format
 *
 */

import React from 'react';
import renderer from 'react-test-renderer';

import ProductNew from '../ProductNew';

test('ProductNew', () => {
  const tree = renderer
    .create(
      <ProductNew />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
