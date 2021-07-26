/**
 *
 * BaseHeader Test
 * @format
 *
 */

import React from "react";
import renderer from "react-test-renderer";

import BaseHeader from "../BaseHeader";

test("BaseHeader", () => {
  const tree = renderer.create(<BaseHeader />).toJSON();
  expect(tree).toMatchSnapshot();
});
