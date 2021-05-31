/**
 *
 * Card Test
 * @format
 *
 */

import React from "react";
import renderer from "react-test-renderer";

import Card from "../Card";

test("Card", () => {
  const tree = renderer.create(<Card />).toJSON();
  expect(tree).toMatchSnapshot();
});
