/**
 *
 * FormDatepicker Test
 * @format
 *
 */

import React from 'react';
import renderer from 'react-test-renderer';

import FormDatepicker from '../FormDatepicker';

test('FormDatepicker', () => {
  const tree = renderer
    .create(
      <FormDatepicker />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
