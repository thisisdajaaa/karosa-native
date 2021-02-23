/**
 *
 * Radio Test
 * @format
 *
 */

import React from 'react';
import renderer from 'react-test-renderer';

import Radio from '../Radio';

test('Radio', () => {
  const tree = renderer
    .create(
      <Radio />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
