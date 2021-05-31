/**
 *
 * ListTitle Test
 * @format
 *
 */

import React from "react";
import renderer from "react-test-renderer";

import ListTitle from "../ListTitle";

test("ListTitle", () => {
  const tree = renderer.create(<ListTitle />).toJSON();
  expect(tree).toMatchSnapshot();
});
