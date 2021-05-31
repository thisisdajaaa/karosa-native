/**
 *
 * AuthVerification Test
 * @format
 *
 */

import React from "react";
import renderer from "react-test-renderer";

import AuthVerification from "../AuthVerification";

test("AuthVerification", () => {
  const tree = renderer.create(<AuthVerification />).toJSON();
  expect(tree).toMatchSnapshot();
});
