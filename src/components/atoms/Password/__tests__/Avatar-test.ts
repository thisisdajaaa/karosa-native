/**
 *
 * Avatar Test
 * @format
 *
 */

import React from "react";
import renderer from "@app/components/templates/AuthLogin/__tests__/node_modules/react-test-renderer";

import Avatar from "../Password";

test("Avatar", () => {
  const tree = renderer.create(<Avatar />).toJSON();
  expect(tree).toMatchSnapshot();
});
