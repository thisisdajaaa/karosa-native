/**
 *
 * ListChevron Test
 * @format
 *
 */

import React from 'react';
import renderer from 'react-test-renderer';

import ListChevron from '../ListChevron';

test('ListChevron', () => {
  const tree = renderer
    .create(
      <ListChevron />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
