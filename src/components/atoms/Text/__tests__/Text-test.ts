/**
 *
 * Text Test
 * @format
 *
 */

import React from "react";
import renderer from "react-test-renderer";

import Text from "../Text";

test("Text", () => {
  const tree = renderer.create(<Text />).toJSON();
  expect(tree).toMatchSnapshot();
});
