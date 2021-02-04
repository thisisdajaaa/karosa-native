/**
 *
 * LoginHelp Test
 * @format
 *
 */

import React from 'react';
import renderer from 'react-test-renderer';

import LoginHelp from '../LoginHelp';

test('LoginHelp', () => {
  const tree = renderer
    .create(
      <LoginHelp />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
