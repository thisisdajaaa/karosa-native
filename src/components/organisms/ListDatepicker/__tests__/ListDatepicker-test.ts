/**
 *
 * ListDatepicker Test
 * @format
 *
 */

import React from "react";
import renderer from "react-test-renderer";

import ListDatepicker from "../ListDatepicker";

test("ListDatepicker", () => {
  const tree = renderer.create(<ListDatepicker />).toJSON();
  expect(tree).toMatchSnapshot();
});
