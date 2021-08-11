/**
 *
 * Delete Test
 * @format
 *
 */

import React from 'react';
import renderer from 'react-test-renderer';

import Delete from '../Delete';

test('Delete', () => {
  const tree = renderer
    .create(
      <Delete />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
