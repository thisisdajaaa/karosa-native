/**
 *
 * ProductAvailability Test
 * @format
 *
 */

import React from "react";
import renderer from "react-test-renderer";

import ProductAvailability from "../ProductAvailability";

test("ProductAvailability", () => {
  const tree = renderer.create(<ProductAvailability />).toJSON();
  expect(tree).toMatchSnapshot();
});
