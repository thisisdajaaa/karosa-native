/**
 *
 * Password Test
 * @format
 *
 */

import React from 'react';
import renderer from 'react-test-renderer';

import Password from '../Password';

test('Password', () => {
  const tree = renderer
    .create(
      <Password />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
