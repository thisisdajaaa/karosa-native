/**
 *
 * OTP Test
 * @format
 *
 */

import React from "react";
import renderer from "react-test-renderer";

import OTP from "../OTP";

test("OTP", () => {
  const tree = renderer.create(<OTP />).toJSON();
  expect(tree).toMatchSnapshot();
});
