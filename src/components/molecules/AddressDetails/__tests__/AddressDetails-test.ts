/**
 *
 * AddressDetails Test
 * @format
 *
 */

import React from 'react';
import renderer from 'react-test-renderer';

import AddressDetails from '../AddressDetails';

test('AddressDetails', () => {
  const tree = renderer
    .create(
      <AddressDetails />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
