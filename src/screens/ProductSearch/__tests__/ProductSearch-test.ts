/**
 *
 * ProductSearch Test
 * @format
 *
 */

import React from "react";
import renderer from "react-test-renderer";

import ProductSearch from "../ProductSearch";

test("ProductSearch", () => {
  const tree = renderer.create(<ProductSearch />).toJSON();
  expect(tree).toMatchSnapshot();
});
