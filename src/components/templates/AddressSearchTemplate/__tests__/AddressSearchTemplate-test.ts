/**
 *
 * AddressSearchTemplate Test
 * @format
 *
 */

import React from "react";
import renderer from "react-test-renderer";

import AddressSearchTemplate from "../AddressSearchTemplate";

test("AddressSearchTemplate", () => {
  const tree = renderer.create(<AddressSearchTemplate />).toJSON();
  expect(tree).toMatchSnapshot();
});
