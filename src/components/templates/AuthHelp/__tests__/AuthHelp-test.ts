/**
 *
 * LoginHelp Test
 * @format
 *
 */

import React from 'react';
import renderer from 'react-test-renderer';

import AuthHelp from '../AuthHelp';

test('AuthHelp', () => {
  const tree = renderer
    .create(
      <AuthHelp />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
