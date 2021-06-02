/**
 *
 * ShopView Test
 * @format
 *
 */

import React from "react";
import renderer from "react-test-renderer";

import ShopView from "../ShopView";

test("ShopView", () => {
  const tree = renderer.create(<ShopView />).toJSON();
  expect(tree).toMatchSnapshot();
});
