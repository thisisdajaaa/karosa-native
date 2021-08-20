/**
 *
 * ImageOverlay Test
 * @format
 *
 */

import React from "react";
import renderer from "react-test-renderer";

import ImageOverlay from "../ImageOverlay";

test("ImageOverlay", () => {
  const tree = renderer.create(<ImageOverlay />).toJSON();
  expect(tree).toMatchSnapshot();
});
