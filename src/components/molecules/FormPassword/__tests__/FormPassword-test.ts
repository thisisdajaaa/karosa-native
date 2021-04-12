/**
 *
 * FormPassword Test
 * @format
 *
 */

import React from 'react';
import renderer from 'react-test-renderer';

import FormPassword from '../FormPassword';

test('FormPassword', () => {
  const tree = renderer
    .create(
      <FormPassword />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
