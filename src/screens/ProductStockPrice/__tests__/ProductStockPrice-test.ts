/**
 *
 * ProductStockPrice Test
 * @format
 *
 */

import React from "react";
import renderer from "react-test-renderer";

import ProductStockPrice from "../ProductStockPrice";

test("ProductStockPrice", () => {
  const tree = renderer.create(<ProductStockPrice />).toJSON();
  expect(tree).toMatchSnapshot();
});
