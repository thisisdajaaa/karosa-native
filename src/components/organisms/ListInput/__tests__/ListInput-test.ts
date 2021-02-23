/**
 *
 * ListInput Test
 * @format
 *
 */

import React from 'react';
import renderer from 'react-test-renderer';

import ListInput from '../ListInput';

test('ListInput', () => {
  const tree = renderer
    .create(
      <ListInput />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
