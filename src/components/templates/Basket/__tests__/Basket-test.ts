/**
 *
 * Basket Test
 * @format
 *
 */

import React from 'react';
import renderer from 'react-test-renderer';

import Basket from '../Basket';

test('Basket', () => {
  const tree = renderer
    .create(
      <Basket />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
