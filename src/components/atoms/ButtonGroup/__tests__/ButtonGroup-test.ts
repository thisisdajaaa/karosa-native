/**
 *
 * ButtonGroup Test
 * @format
 *
 */

import React from "react";
import renderer from "react-test-renderer";

import ButtonGroup from "../ButtonGroup";

test("ButtonGroup", () => {
  const tree = renderer.create(<ButtonGroup />).toJSON();
  expect(tree).toMatchSnapshot();
});
