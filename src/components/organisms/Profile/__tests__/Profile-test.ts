/**
 *
 * Profile Test
 * @format
 *
 */

import React from 'react';
import renderer from 'react-test-renderer';

import Profile from '../Profile';

test('Profile', () => {
  const tree = renderer
    .create(
      <Profile />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
