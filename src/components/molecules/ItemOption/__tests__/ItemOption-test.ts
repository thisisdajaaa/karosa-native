/**
 *
 * ItemOption Test
 * @format
 *
 */

import React from "react";
import renderer from "react-test-renderer";

import ItemOption from "../ItemOption";

test("ItemOption", () => {
  const tree = renderer.create(<ItemOption />).toJSON();
  expect(tree).toMatchSnapshot();
});
