/**
 *
 * ValidationMessage Test
 * @format
 *
 */

import React from 'react';
import renderer from 'react-test-renderer';

import ValidationMessage from '../ValidationMessage';

test('ValidationMessage', () => {
  const tree = renderer
    .create(
      <ValidationMessage />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
