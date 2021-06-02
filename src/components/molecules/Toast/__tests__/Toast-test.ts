/**
 *
 * Toast Test
 * @format
 *
 */

import React from "react";
import renderer from "react-test-renderer";

import Toast from "../Toast";

test("Toast", () => {
  const tree = renderer.create(<Toast />).toJSON();
  expect(tree).toMatchSnapshot();
});
