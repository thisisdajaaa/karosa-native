/**
 *
 * ListImage Test
 * @format
 *
 */

import React from "react";
import renderer from "react-test-renderer";

import ListImage from "../ListImage";

test("ListImage", () => {
  const tree = renderer.create(<ListImage />).toJSON();
  expect(tree).toMatchSnapshot();
});
