/**
 *
 * Home Test
 * @format
 *
 */

import React from 'react';
import renderer from 'react-test-renderer';

import Home from '../Home';

test('Home', () => {
  const tree = renderer.create(
      <Home />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
