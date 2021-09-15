/**
 *
 * FormQuantity Test
 * @format
 *
 */

import React from "react";
import renderer from "react-test-renderer";

import FormQuantity from "../FormQuantity";

test("FormQuantity", () => {
  const tree = renderer.create(<FormQuantity />).toJSON();
  expect(tree).toMatchSnapshot();
});
