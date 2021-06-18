/**
 *
 * CartItem Test
 * @format
 *
 */

import React from 'react';
import renderer from 'react-test-renderer';

import CartItem from '../CartItem';

test('CartItem', () => {
  const tree = renderer
    .create(
      <CartItem />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
