/**
 *
 * ListSwitch Test
 * @format
 *
 */

import React from 'react';
import renderer from 'react-test-renderer';

import ListSwitch from '../ListSwitch';

test('ListSwitch', () => {
  const tree = renderer
    .create(
      <ListSwitch />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
