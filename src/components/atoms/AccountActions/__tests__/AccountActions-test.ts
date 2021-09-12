/**
 *
 * AccountActions Test
 * @format
 *
 */

import React from "react";
import renderer from "react-test-renderer";

import AccountActions from "../AccountActions";

test("AccountActions", () => {
  const tree = renderer.create(<AccountActions />).toJSON();
  expect(tree).toMatchSnapshot();
});
