/**
 *
 * UserAccountSettings Test
 * @format
 *
 */

import React from "react";
import renderer from "react-test-renderer";

import UserAccountSettings from "../UserAccountSettings";

test("UserAccountSettings", () => {
  const tree = renderer.create(<UserAccountSettings />).toJSON();
  expect(tree).toMatchSnapshot();
});
