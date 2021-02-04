/**
 *
 * ListDisplay Test
 * @format
 *
 */

import React from 'react';
import renderer from 'react-test-renderer';

import ListDisplay from '../ListDisplay';

test('ListDisplay', () => {
  const tree = renderer
    .create(
      <ListDisplay />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
