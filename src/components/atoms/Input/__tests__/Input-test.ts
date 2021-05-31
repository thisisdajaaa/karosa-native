/**
 *
 * Input Test
 * @format
 *
 */

import React from "react";
import renderer from "react-test-renderer";

import Input from "../Input";

test("Input", () => {
  const tree = renderer.create(<Input />).toJSON();
  expect(tree).toMatchSnapshot();
});
