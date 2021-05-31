/**
 *
 * Checkbox Test
 * @format
 *
 */

import React from "react";
import renderer from "react-test-renderer";

import Checkbox from "../Checkbox";

test("Checkbox", () => {
  const tree = renderer.create(<Checkbox />).toJSON();
  expect(tree).toMatchSnapshot();
});
