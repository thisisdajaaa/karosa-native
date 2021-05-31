/**
 *
 * ShopEditAddress Test
 * @format
 *
 */

import React from "react";
import renderer from "react-test-renderer";

import ShopEditAddress from "../ShopEditAddress";

test("ShopEditAddress", () => {
  const tree = renderer.create(<ShopEditAddress />).toJSON();
  expect(tree).toMatchSnapshot();
});
