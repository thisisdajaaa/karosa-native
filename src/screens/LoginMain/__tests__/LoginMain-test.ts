/**
 *
 * LoginMain Test
 * @format
 *
 */

import React from 'react';
import renderer from 'react-test-renderer';

import LoginMain from '../LoginMain';

test('LoginMain', () => {
  const tree = renderer
    .create(
      <LoginMain />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
