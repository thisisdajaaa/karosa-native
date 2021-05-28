/**
 *
 * SignUpPhoneNumber Test
 * @format
 *
 */

import React from "react";
import renderer from "react-test-renderer";

import SignUpPhoneNumber from "../SignUpPassword";

test("SignUpPhoneNumber", () => {
  const tree = renderer.create(<SignUpPhoneNumber />).toJSON();
  expect(tree).toMatchSnapshot();
});
