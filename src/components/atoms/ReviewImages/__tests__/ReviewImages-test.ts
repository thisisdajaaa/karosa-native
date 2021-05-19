/**
 *
 * ReviewImages Test
 * @format
 *
 */

import React from 'react';
import renderer from 'react-test-renderer';

import ReviewImages from '../ReviewImages';

test('ReviewImages', () => {
  const tree = renderer
    .create(
      <ReviewImages />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
