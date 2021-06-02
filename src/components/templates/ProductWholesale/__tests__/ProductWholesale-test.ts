/**
 *
 * ProductWholesale Test
 * @format
 *
 */

import React from "react";
import renderer from "react-test-renderer";

import ProductWholesale from "../ProductWholesale";

test("ProductWholesale", () => {
  const tree = renderer.create(<ProductWholesale />).toJSON();
  expect(tree).toMatchSnapshot();
});
