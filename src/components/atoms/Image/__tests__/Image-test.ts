/**
 *
 * Image Test
 * @format
 *
 */

import React from 'react';
import renderer from 'react-test-renderer';

import Image from '../Image';

test('Image', () => {
  const tree = renderer
    .create(
      <Image />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
