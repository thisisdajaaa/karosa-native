/**
 *
 * HomeSearchTemplate Test
 * @format
 *
 */

import React from "react";
import renderer from "react-test-renderer";

import HomeSearchTemplate from "../HomeSearchTemplate";

test("HomeSearchTemplate", () => {
  const tree = renderer.create(<HomeSearchTemplate />).toJSON();
  expect(tree).toMatchSnapshot();
});
