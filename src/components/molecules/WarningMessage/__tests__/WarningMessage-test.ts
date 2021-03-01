/**
 *
 * WarningMessage Test
 * @format
 *
 */

import React from 'react';
import renderer from 'react-test-renderer';

import WarningMessage from '../WarningMessage';

test('WarningMessage', () => {
  const tree = renderer
    .create(
      <WarningMessage />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
