/**
 *
 * Switch Test
 * @format
 *
 */

import React from "react";
import renderer from "react-test-renderer";

import Switch from "../Switch";

test("Switch", () => {
  const tree = renderer.create(<Switch />).toJSON();
  expect(tree).toMatchSnapshot();
});
