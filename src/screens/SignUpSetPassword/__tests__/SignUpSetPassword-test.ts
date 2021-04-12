/**
 *
 * SignUpSetPassword Test
 * @format
 *
 */

import React from 'react';
import renderer from 'react-test-renderer';

import SignUpSetPassword from '../SignUpSetPassword';

test('SignUpSetPassword', () => {
  const tree = renderer
    .create(
      <SignUpSetPassword />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
