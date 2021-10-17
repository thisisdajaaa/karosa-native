/**
 *
 * CheckoutDelivery Test
 * @format
 *
 */

import React from "react";
import renderer from "react-test-renderer";

import CheckoutDelivery from "../CheckoutDelivery";

test("CheckoutDelivery", () => {
  const tree = renderer.create(<CheckoutDelivery />).toJSON();
  expect(tree).toMatchSnapshot();
});
