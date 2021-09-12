/**
 *
 * Badge Test
 * @format
 *
 */

import React from "react";
import renderer from "@app/templates/AuthLogin/__tests__/node_modules/react-test-renderer";

import Badge from "../Badge";

test("Badge", () => {
  const tree = renderer.create(<Badge />).toJSON();
  expect(tree).toMatchSnapshot();
});
