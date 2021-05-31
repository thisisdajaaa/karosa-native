/**
 *
 * ListProduct Test
 * @format
 *
 */

import React from "react";
import renderer from "react-test-renderer";

import ListProduct from "../ListProduct";

test("ListProduct", () => {
  const tree = renderer.create(<ListProduct />).toJSON();
  expect(tree).toMatchSnapshot();
});
