/**
 *
 * Tracker Test
 * @format
 *
 */

import React from "react";
import renderer from "react-test-renderer";

import Tracker from "../Tracker";

test("Tracker", () => {
  const tree = renderer.create(<Tracker />).toJSON();
  expect(tree).toMatchSnapshot();
});
