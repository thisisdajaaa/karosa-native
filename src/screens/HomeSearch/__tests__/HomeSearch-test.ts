/**
 *
 * HomeSearch Test
 * @format
 *
 */

import React from "react";
import renderer from "react-test-renderer";

import HomeSearch from "../HomeSearch";

test("HomeSearch", () => {
  const tree = renderer.create(<HomeSearch />).toJSON();
  expect(tree).toMatchSnapshot();
});
