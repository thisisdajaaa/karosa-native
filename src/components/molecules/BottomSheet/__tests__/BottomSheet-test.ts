/**
 *
 * BottomSheet Test
 * @format
 *
 */

import React from 'react';
import renderer from 'react-test-renderer';

import BottomSheet from '../BottomSheet';

test('BottomSheet', () => {
  const tree = renderer
    .create(
      <BottomSheet />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
