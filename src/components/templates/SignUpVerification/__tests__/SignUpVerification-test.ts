/**
 *
 * SignUpVerification Test
 * @format
 *
 */

import React from 'react';
import renderer from 'react-test-renderer';

import SignUpVerification from '../SignUpVerification';

test('SignUpVerification', () => {
  const tree = renderer
    .create(
      <SignUpVerification />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
