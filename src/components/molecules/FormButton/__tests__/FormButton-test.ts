/**
 *
 * FormButton Test
 * @format
 *
 */

import React from 'react';
import renderer from 'react-test-renderer';

import FormButton from '../FormButton';

test('FormButton', () => {
  const tree = renderer
    .create(
      <FormButton />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
