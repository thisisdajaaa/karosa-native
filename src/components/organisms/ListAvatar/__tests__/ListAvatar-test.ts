/**
 *
 * ListAvatar Test
 * @format
 *
 */

import React from "react";
import renderer from "react-test-renderer";

import ListAvatar from "../ListAvatar";

test("ListAvatar", () => {
  const tree = renderer.create(<ListAvatar />).toJSON();
  expect(tree).toMatchSnapshot();
});
