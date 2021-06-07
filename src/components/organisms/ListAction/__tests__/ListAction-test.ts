/**
 *
 * ListAction Test
 * @format
 *
 */

import React from "react";
import renderer from "react-test-renderer";

import ListAction from "../ListAction";

test("ListAction", () => {
  const tree = renderer.create(<ListAction />).toJSON();
  expect(tree).toMatchSnapshot();
});
