/**
 *
 * AuthPassword Test
 * @format
 *
 */

import React from 'react';
import renderer from 'react-test-renderer';

import AuthPassword from '../AuthPassword';

test('AuthPassword', () => {
  const tree = renderer
    .create(
      <AuthPassword />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
