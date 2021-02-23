/**
 *
 * FormRadioGroup Test
 * @format
 *
 */

import React from 'react';
import renderer from 'react-test-renderer';

import FormRadioGroup from '../FormRadioGroup';

test('FormRadioGroup', () => {
  const tree = renderer
    .create(
      <FormRadioGroup />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
