/**
 *
 * LazyLoad Test
 * @format
 *
 */

import React from "react";
import renderer from "react-test-renderer";

import LazyLoad from "../LazyLoad";

test("LazyLoad", () => {
  const tree = renderer.create(<LazyLoad />).toJSON();
  expect(tree).toMatchSnapshot();
});
