/**
 *
 * ProductDetail Test
 * @format
 *
 */

import React from "react";
import renderer from "react-test-renderer";

import ProductDetail from "../ProductDetail";

test("ProductDetail", () => {
  const tree = renderer.create(<ProductDetail />).toJSON();
  expect(tree).toMatchSnapshot();
});
