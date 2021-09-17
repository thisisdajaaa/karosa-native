import { OrderFullfillmentTemplate } from "@app/components/templates/OrderFullfillment/OrderFullfillment";
/**
 *
 * OrderFullfillment Test
 * @format
 *
 */

import React from "react";
import renderer from "react-test-renderer";

import OrderFullfillmentTemplate from "../OrderFullfillment";

test("OrderFullfillment", () => {
  const tree = renderer.create(<OrderFullfillmentTemplate />).toJSON();
  expect(tree).toMatchSnapshot();
});
