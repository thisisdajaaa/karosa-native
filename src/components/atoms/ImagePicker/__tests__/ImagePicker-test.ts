/**
 *
 * ImagePicker Test
 * @format
 *
 */

import React from 'react';
import renderer from 'react-test-renderer';

import ImagePicker from '../ImagePicker';

test('ImagePicker', () => {
  const tree = renderer
    .create(
      <ImagePicker />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
