/**
 *
 * AddressMainTemplate Test
 * @format
 *
 */

import React from "react";
import renderer from "react-test-renderer";

import AddressMainTemplate from "../AddressMainTemplate";

test("AddressMainTemplate", () => {
  const tree = renderer.create(<AddressMainTemplate />).toJSON();
  expect(tree).toMatchSnapshot();
});
