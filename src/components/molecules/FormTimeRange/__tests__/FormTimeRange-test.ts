/**
 *
 * FormTimeRange Test
 * @format
 *
 */

import React from "react";
import renderer from "react-test-renderer";

import FormTimeRange from "../FormTimeRange";

test("FormTimeRange", () => {
  const tree = renderer.create(<FormTimeRange />).toJSON();
  expect(tree).toMatchSnapshot();
});
