/**
 *
 * StoreBar Test
 * @format
 *
 */

import React from 'react';
import renderer from 'react-test-renderer';

import StoreBar from '../StoreBar';

test('StoreBar', () => {
  const tree = renderer
    .create(
      <StoreBar />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
