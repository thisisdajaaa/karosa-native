/**
 *
 * AddressNewTemplate Test
 * @format
 *
 */

import React from "react";
import renderer from "react-test-renderer";

import AddressNewTemplate from "../AddressNewTemplate";

test("AddressNewTemplate", () => {
  const tree = renderer.create(<AddressNewTemplate />).toJSON();
  expect(tree).toMatchSnapshot();
});
