/**
 *
 * UserAccountDelete Test
 * @format
 *
 */

import React from "react";
import renderer from "react-test-renderer";

import UserAccountDelete from "../UserAccountDelete";

test("UserAccountDelete", () => {
  const tree = renderer.create(<UserAccountDelete />).toJSON();
  expect(tree).toMatchSnapshot();
});
