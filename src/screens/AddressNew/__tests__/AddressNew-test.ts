/**
 *
 * AddressNew Test
 * @format
 *
 */

import React from "react";
import renderer from "react-test-renderer";

import AddressNew from "../AddressNew";

test("AddressNew", () => {
  const tree = renderer.create(<AddressNew />).toJSON();
  expect(tree).toMatchSnapshot();
});
