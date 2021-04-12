/**
 *
 * SignUpPassword Test
 * @format
 *
 */

import React from 'react';
import renderer from 'react-test-renderer';

import SignUpPassword from '../SignUpPassword';

test('SignUpPassword', () => {
  const tree = renderer
    .create(
      <SignUpPassword />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
