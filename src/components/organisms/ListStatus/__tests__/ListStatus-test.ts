/**
 *
 * ListStatus Test
 * @format
 *
 */

import React from 'react';
import renderer from 'react-test-renderer';

import ListStatus from '../ListStatus';

test('ListStatus', () => {
  const tree = renderer
    .create(
      <ListStatus />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
