/**
 *
 * AddressSearch Test
 * @format
 *
 */

import React from "react";
import renderer from "react-test-renderer";

import AddressSearch from "../AddressSearch";

test("AddressSearch", () => {
  const tree = renderer.create(<AddressSearch />).toJSON();
  expect(tree).toMatchSnapshot();
});
