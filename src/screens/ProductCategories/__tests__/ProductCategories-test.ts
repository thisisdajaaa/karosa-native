/**
 *
 * ProductCategories Test
 * @format
 *
 */

import React from "react";
import renderer from "react-test-renderer";

import ProductCategories from "../ProductCategories";

test("ProductCategories", () => {
  const tree = renderer.create(<ProductCategories />).toJSON();
  expect(tree).toMatchSnapshot();
});
