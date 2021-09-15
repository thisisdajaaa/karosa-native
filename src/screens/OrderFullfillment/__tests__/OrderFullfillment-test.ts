/**
 *
 * OrderFullfillment Test
 * @format
 *
 */

import React from "react";
import renderer from "react-test-renderer";

import OrderFullfillment from "../OrderFullfillment";

test("OrderFullfillment", () => {
  const tree = renderer.create(<OrderFullfillment />).toJSON();
  expect(tree).toMatchSnapshot();
});
