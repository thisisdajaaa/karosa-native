/**
 *
 * IconLabel Test
 * @format
 *
 */

import React from "react";
import renderer from "react-test-renderer";

import IconLabel from "../IconLabel";

test("IconLabel", () => {
  const tree = renderer.create(<IconLabel />).toJSON();
  expect(tree).toMatchSnapshot();
});
