/**
 *
 * Rating Test
 * @format
 *
 */

import React from "react";
import renderer from "react-test-renderer";

import Rating from "../Rating";

test("Rating", () => {
  const tree = renderer.create(<Rating />).toJSON();
  expect(tree).toMatchSnapshot();
});
