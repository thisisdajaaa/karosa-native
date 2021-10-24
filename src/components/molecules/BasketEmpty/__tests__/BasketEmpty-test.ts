/**
 *
 * BasketEmpty Test
 * @format
 *
 */

import React from 'react';
import renderer from 'react-test-renderer';

import BasketEmpty from '../BasketEmpty';

test('BasketEmpty', () => {
  const tree = renderer
    .create(
      <BasketEmpty />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
