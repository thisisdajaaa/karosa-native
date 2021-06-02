/**
 *
 * AuthPhoneNumber Test
 * @format
 *
 */

import React from "react";
import renderer from "react-test-renderer";

import AuthPhoneNumber from "../AuthPhoneNumber";

test("AuthPhoneNumber", () => {
  const tree = renderer.create(<AuthPhoneNumber />).toJSON();
  expect(tree).toMatchSnapshot();
});
