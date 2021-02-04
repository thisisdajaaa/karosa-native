/**
 *
 * Login Test
 * @format
 *
 */

import React from 'react';
import renderer from 'react-test-renderer';

import Login from '../Login';

test('Login', () => {
  const tree = renderer
    .create(
      <Login />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
