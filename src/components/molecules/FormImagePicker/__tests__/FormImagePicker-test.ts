/**
 *
 * FormImagePicker Test
 * @format
 *
 */

import React from "react";
import renderer from "react-test-renderer";

import FormImagePicker from "../FormImagePicker";

test("FormImagePicker", () => {
  const tree = renderer.create(<FormImagePicker />).toJSON();
  expect(tree).toMatchSnapshot();
});
