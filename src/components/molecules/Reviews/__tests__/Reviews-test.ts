/**
 *
 * Reviews Test
 * @format
 *
 */

import React from 'react';
import renderer from 'react-test-renderer';

import Reviews from '../Reviews';

test('Reviews', () => {
  const tree = renderer
    .create(
      <Reviews />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
