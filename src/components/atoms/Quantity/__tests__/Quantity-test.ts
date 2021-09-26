/**
 *
 * Quantity Test
 * @format
 *
 */

import React from "react";
import renderer from "react-test-renderer";

import Quantity from "../Quantity";

test("Quantity", () => {
  const tree = renderer.create(<Quantity />).toJSON();
  expect(tree).toMatchSnapshot();
});
