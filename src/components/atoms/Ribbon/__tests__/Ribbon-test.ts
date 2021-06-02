/**
 *
 * Ribbon Test
 * @format
 *
 */

import React from "react";
import renderer from "react-test-renderer";

import Ribbon from "../Ribbon";

test("Ribbon", () => {
  const tree = renderer.create(<Ribbon />).toJSON();
  expect(tree).toMatchSnapshot();
});
