/**
 *
 * Checkout Test
 * @format
 *
 */

import React from "react";
import renderer from "react-test-renderer";

import Checkout from "../Checkout";

test("Checkout", () => {
  const tree = renderer.create(<Checkout />).toJSON();
  expect(tree).toMatchSnapshot();
});
