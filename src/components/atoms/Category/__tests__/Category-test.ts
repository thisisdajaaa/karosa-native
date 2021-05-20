/**
 *
 * Category Test
 * @format
 *
 */

import React from "react";
import renderer from "react-test-renderer";

import Category from "../Category";

test("Category", () => {
  const tree = renderer.create(<Category />).toJSON();
  expect(tree).toMatchSnapshot();
});
