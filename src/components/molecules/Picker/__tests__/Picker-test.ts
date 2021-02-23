/**
 *
 * Picker Test
 * @format
 *
 */

import React from 'react';
import renderer from 'react-test-renderer';

import Picker from '../Picker';

test('Picker', () => {
  const tree = renderer
    .create(
      <Picker />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
