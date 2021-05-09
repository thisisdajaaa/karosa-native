/**
 *
 * ListRadioGroup Test
 * @format
 *
 */

import React from 'react';
import renderer from 'react-test-renderer';

import ListRadioGroup from '../ListRadioGroup';

test('ListRadioGroup', () => {
  const tree = renderer
    .create(
      <ListRadioGroup />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
