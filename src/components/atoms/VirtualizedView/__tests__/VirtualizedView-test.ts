/**
 *
 * VirtualizedView Test
 * @format
 *
 */

import React from 'react';
import renderer from 'react-test-renderer';

import VirtualizedView from '../VirtualizedView';

test('VirtualizedView', () => {
  const tree = renderer
    .create(
      <VirtualizedView />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
