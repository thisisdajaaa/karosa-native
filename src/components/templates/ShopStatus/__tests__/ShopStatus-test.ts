/**
 *
 * ShopStatus Test
 * @format
 *
 */

import React from "react";
import renderer from "react-test-renderer";

import ShopStatus from "../ShopStatus";

test("ShopStatus", () => {
  const tree = renderer.create(<ShopStatus />).toJSON();
  expect(tree).toMatchSnapshot();
});
