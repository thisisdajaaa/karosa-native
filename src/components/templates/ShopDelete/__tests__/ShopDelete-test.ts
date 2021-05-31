/**
 *
 * ShopDelete Test
 * @format
 *
 */

import React from "react";
import renderer from "react-test-renderer";

import ShopDelete from "../ShopDelete";

test("ShopDelete", () => {
  const tree = renderer.create(<ShopDelete />).toJSON();
  expect(tree).toMatchSnapshot();
});
