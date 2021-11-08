/**
 *
 * Datepicker Test
 * @format
 *
 */

import React from 'react';
import renderer from 'react-test-renderer';

import Datepicker from '../Datepicker';

test('Datepicker', () => {
  const tree = renderer
    .create(
      <Datepicker />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
