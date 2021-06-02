/**
 *
 * DiscountCoupon Test
 * @format
 *
 */

import React from "react";
import renderer from "react-test-renderer";

import DiscountCoupon from "../DiscountCoupon";

test("DiscountCoupon", () => {
  const tree = renderer.create(<DiscountCoupon />).toJSON();
  expect(tree).toMatchSnapshot();
});
