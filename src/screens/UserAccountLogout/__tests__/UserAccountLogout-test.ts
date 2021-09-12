/**
 *
 * UserAccountLogout Test
 * @format
 *
 */

import React from "react";
import renderer from "react-test-renderer";

import UserAccountLogout from "../UserAccountLogout";

test("UserAccountLogout", () => {
  const tree = renderer.create(<UserAccountLogout />).toJSON();
  expect(tree).toMatchSnapshot();
});
