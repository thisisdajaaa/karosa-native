/**
 *
 * ProductMeasurement Test
 * @format
 *
 */

import React from "react";
import renderer from "react-test-renderer";

import ProductMeasurement from "../ProductMeasurement";

test("ProductMeasurement", () => {
  const tree = renderer.create(<ProductMeasurement />).toJSON();
  expect(tree).toMatchSnapshot();
});
