/**
 *
 * Timeline Test
 * @format
 *
 */

import React from "react";
import renderer from "react-test-renderer";

import Timeline from "../Timeline";

test("Timeline", () => {
  const tree = renderer.create(<Timeline />).toJSON();
  expect(tree).toMatchSnapshot();
});
