/**
 *
 * ImageOverlayReviews Test
 * @format
 *
 */

import React from "react";
import renderer from "react-test-renderer";

import ImageOverlayReviews from "../ImageOverlayReviews";

test("ImageOverlayReviews", () => {
  const tree = renderer.create(<ImageOverlayReviews />).toJSON();
  expect(tree).toMatchSnapshot();
});
