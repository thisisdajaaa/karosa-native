/**
 *
 * MediaQuery Test
 * @format
 *
 */

import React from "react";
import renderer from "react-test-renderer";

import MediaQuery from "../MediaQuery";

test("MediaQuery", () => {
  const tree = renderer.create(<MediaQuery />).toJSON();
  expect(tree).toMatchSnapshot();
});
