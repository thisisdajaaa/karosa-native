/**
 *
 * FormInput Test
 * @format
 *
 */

import React from 'react';
import renderer from 'react-test-renderer';

import FormInput from '../FormInput';

test('FormInput', () => {
  const tree = renderer
    .create(
      <FormInput />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
