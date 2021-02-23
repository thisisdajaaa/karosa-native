/**
 *
 * LoginMain Test
 * @format
 *
 */

import React from 'react';
import renderer from 'react-test-renderer';

import AuthMain from '../AuthMain';

test('AuthMain', () => {
  const tree = renderer
    .create(
      <AuthMain />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
