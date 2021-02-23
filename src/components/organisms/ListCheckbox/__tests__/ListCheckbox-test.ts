/**
 *
 * ListCheckbox Test
 * @format
 *
 */

import React from 'react';
import renderer from 'react-test-renderer';

import ListCheckbox from '../ListCheckbox';

test('ListCheckbox', () => {
  const tree = renderer
    .create(
      <ListCheckbox />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
