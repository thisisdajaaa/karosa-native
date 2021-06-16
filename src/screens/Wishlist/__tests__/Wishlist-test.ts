/**
 *
 * Wishlist Test
 * @format
 *
 */

import React from "react";
import renderer from "react-test-renderer";

import Wishlist from "../Wishlist";

test("Wishlist", () => {
  const tree = renderer.create(<Wishlist />).toJSON();
  expect(tree).toMatchSnapshot();
});
