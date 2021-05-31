/**
 *
 * ProductVariation Test
 * @format
 *
 */

import React from "react";
import renderer from "react-test-renderer";

import ProductVariation from "../ProductVariation";

test("ProductVariation", () => {
  const tree = renderer.create(<ProductVariation />).toJSON();
  expect(tree).toMatchSnapshot();
});
