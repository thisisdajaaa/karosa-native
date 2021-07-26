/**
 *
 * BottomSheet2 Test
 * @format
 *
 */

import React from "react";
import renderer from "react-test-renderer";

import BottomSheet from "../BottomSheet";

test("BottomSheet2", () => {
  const tree = renderer.create(<BottomSheet />).toJSON();
  expect(tree).toMatchSnapshot();
});
