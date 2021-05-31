/**
 *
 * Banner Test
 * @format
 *
 */

import React from "react";
import renderer from "react-test-renderer";

import Banner from "../Banner";

test("Banner", () => {
  const tree = renderer.create(<Banner />).toJSON();
  expect(tree).toMatchSnapshot();
});
