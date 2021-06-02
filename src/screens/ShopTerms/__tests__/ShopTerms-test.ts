/**
 *
 * ShopTerms Test
 * @format
 *
 */

import React from "react";
import renderer from "react-test-renderer";

import ShopTerms from "../ShopTerms";

test("ShopTerms", () => {
  const tree = renderer.create(<ShopTerms />).toJSON();
  expect(tree).toMatchSnapshot();
});
