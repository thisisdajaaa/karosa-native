/**
 *
 * TimeRange Test
 * @format
 *
 */

import React from "react";
import renderer from "react-test-renderer";

import TimeRange from "../TimeRange";

test("TimeRange", () => {
  const tree = renderer.create(<TimeRange />).toJSON();
  expect(tree).toMatchSnapshot();
});
