/**
 *
 * BottomSheet Test
 * @format
 *
 */

import React from 'react';
import renderer from 'react-test-renderer';

import AuthForgot from '../AuthForgot';

test('LoginForgot', () => {
  const tree = renderer.create(<AuthForgot />).toJSON();
  expect(tree).toMatchSnapshot();
});
