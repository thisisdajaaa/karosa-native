/**
 *
 * VariationItem Test
 * @format
 *
 */

import React from "react";
import renderer from "react-test-renderer";

import VariationItem from "../VariationItem";

test("VariationItem", () => {
  const tree = renderer.create(<VariationItem />).toJSON();
  expect(tree).toMatchSnapshot();
});
