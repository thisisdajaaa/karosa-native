/**
 *
 * Login Test
 * @format
 *
 */

import React from 'react';
import renderer from 'react-test-renderer';

import AuthLogin from '../AuthLogin';

test('Login', () => {
  const tree = renderer
    .create(
      <AuthLogin />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
