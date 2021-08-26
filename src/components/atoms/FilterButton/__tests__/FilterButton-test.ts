/**
 *
 * FilterButton Test
 * @format
 *
 */

import React from "react";
import renderer from "react-test-renderer";

import FilterButton from "../FilterButton";

test("FilterButton", () => {
  const tree = renderer.create(<FilterButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
