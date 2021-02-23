/**
 *
 * ListPicker Test
 * @format
 *
 */

import React from 'react';
import renderer from 'react-test-renderer';

import ListPicker from '../ListPicker';

test('ListPicker', () => {
  const tree = renderer
    .create(
      <ListPicker />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
