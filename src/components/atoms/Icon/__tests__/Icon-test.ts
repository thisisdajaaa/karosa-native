/**
 *
 * Icon Test
 * @format
 *
 */

import React from 'react';
import renderer from 'react-test-renderer';

import Icon from '../Icon';

test('Icon', () => {
  const tree = renderer
    .create(
      <Icon />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
