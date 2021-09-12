/**
 *
 * UserAccountSocialMedia Test
 * @format
 *
 */

import React from "react";
import renderer from "react-test-renderer";

import UserAccountSocialMedia from "../UserAccountSocialMedia";

test("UserAccountSocialMedia", () => {
  const tree = renderer.create(<UserAccountSocialMedia />).toJSON();
  expect(tree).toMatchSnapshot();
});
