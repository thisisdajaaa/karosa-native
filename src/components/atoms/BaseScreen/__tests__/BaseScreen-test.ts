/**
 *
 * BaseScreen Test
 * @format
 *
 */

import React from "react";
import renderer from "react-test-renderer";

import BaseScreen from "../BaseScreen";

test("BaseScreen", () => {
  const tree = renderer.create(<BaseScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
