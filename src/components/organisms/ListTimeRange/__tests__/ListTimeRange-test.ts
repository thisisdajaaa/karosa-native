/**
 *
 * ListTimeRange Test
 * @format
 *
 */

import React from "react";
import renderer from "react-test-renderer";

import ListTimeRange from "../ListTimeRange";

test("ListTimeRange", () => {
  const tree = renderer.create(<ListTimeRange />).toJSON();
  expect(tree).toMatchSnapshot();
});
