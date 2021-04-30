/**
 *
 * HomeCard Test
 * @format
 *
 */

import React from 'react';
import renderer from 'react-test-renderer';

import HomeCard from '../ProductCard';

test('HomeCard', () => {
  const tree = renderer
    .create(
      <HomeCard />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
