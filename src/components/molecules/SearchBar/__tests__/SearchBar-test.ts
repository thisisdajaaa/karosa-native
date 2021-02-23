/**
 *
 * SearchBar Test
 * @format
 *
 */

import React from 'react';
import renderer from 'react-test-renderer';

import SearchBar from '../SearchBar';

test('SearchBar', () => {
  const tree = renderer
    .create(
      <SearchBar />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
