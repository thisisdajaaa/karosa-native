/**
 *
 * UserAccountEdit Test
 * @format
 *
 */

import React from "react";
import renderer from "react-test-renderer";

import UserAccountEdit from "../UserAccountEdit";

test("UserAccountEdit", () => {
  const tree = renderer.create(<UserAccountEdit />).toJSON();
  expect(tree).toMatchSnapshot();
});
