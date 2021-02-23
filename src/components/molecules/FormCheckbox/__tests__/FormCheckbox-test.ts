/**
 *
 * FormCheckbox Test
 * @format
 *
 */

import React from 'react';
import renderer from 'react-test-renderer';

import FormCheckbox from '../FormCheckbox';

test('FormCheckbox', () => {
  const tree = renderer
    .create(
      <FormCheckbox />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
