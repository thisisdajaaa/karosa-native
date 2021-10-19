/**
 *
 * AddressMain Test
 * @format
 *
 */

import React from "react";
import renderer from "react-test-renderer";

import AddressMain from "../AddressMain";

test("AddressMain", () => {
  const tree = renderer.create(<AddressMain />).toJSON();
  expect(tree).toMatchSnapshot();
});
