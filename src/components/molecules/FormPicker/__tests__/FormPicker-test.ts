/**
 *
 * FormPicker Test
 * @format
 *
 */

import React from "react";
import renderer from "react-test-renderer";

import FormPicker from "../FormPicker";

test("FormPicker", () => {
  const tree = renderer.create(<FormPicker />).toJSON();
  expect(tree).toMatchSnapshot();
});
