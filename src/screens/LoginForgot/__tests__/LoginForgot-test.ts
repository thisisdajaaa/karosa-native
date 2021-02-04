/**
 *
 * LoginForgot Test
 * @format
 *
 */

import React from 'react';
import renderer from 'react-test-renderer';

import LoginForgot from '../LoginForgot';

test('LoginForgot', () => {
  const tree = renderer
    .create(
      <LoginForgot />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
