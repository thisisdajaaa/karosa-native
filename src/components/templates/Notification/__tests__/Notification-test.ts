/**
 *
 * Notification Test
 * @format
 *
 */

import React from "react";
import renderer from "react-test-renderer";

import Notification from "../Notification";

test("Notification", () => {
  const tree = renderer.create(<Notification />).toJSON();
  expect(tree).toMatchSnapshot();
});
