/**
 *
 * Badge Test
 * @format
 *
 */

import React from 'react';
import renderer from 'react-test-renderer';

import Badge from '../Badge';

test('Badge', () => {
  const tree = renderer
    .create(
      <Badge />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
