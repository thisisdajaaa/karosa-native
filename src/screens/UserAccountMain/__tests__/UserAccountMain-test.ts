/**
 *
 * UserAccountMain Test
 * @format
 *
 */

import React from "react";
import renderer from "react-test-renderer";

import UserAccountMain from "../UserAccountMain";

test("UserAccountMain", () => {
  const tree = renderer.create(<UserAccountMain />).toJSON();
  expect(tree).toMatchSnapshot();
});
