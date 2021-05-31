/**
 *
 * FormSwitch Test
 * @format
 *
 */

import React from "react";
import renderer from "react-test-renderer";

import FormSwitch from "../FormSwitch";

test("FormSwitch", () => {
  const tree = renderer.create(<FormSwitch />).toJSON();
  expect(tree).toMatchSnapshot();
});
