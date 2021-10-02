/**
 *
 * Chip Test
 * @format
 *
 */

import React from "react";
import renderer from "react-test-renderer";

import Chip from "../Chip";

test("Chip", () => {
  const tree = renderer.create(<Chip />).toJSON();
  expect(tree).toMatchSnapshot();
});
