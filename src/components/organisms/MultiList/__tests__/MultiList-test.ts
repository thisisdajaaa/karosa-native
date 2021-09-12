/**
 *
 * MultiList Test
 * @format
 *
 */

import React from "react";
import renderer from "react-test-renderer";

import MultiList from "../MultiList";

test("MultiList", () => {
  const tree = renderer.create(<MultiList />).toJSON();
  expect(tree).toMatchSnapshot();
});
