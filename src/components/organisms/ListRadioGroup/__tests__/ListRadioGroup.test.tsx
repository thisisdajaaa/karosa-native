import React from "react";
import { renderWithFormikWrapper } from "@app/ci/testHelper";
import type { Option } from "@app/components/molecules/FormRadioGroup/types";
import ListRadioGroup from "../ListRadioGroup";

const testData: Option[] = [
  {
    id: "1",
    label: "Lalamove",
    info: "P50",
  },
  {
    id: "2",
    label: "Seller own Courier",
  },
  {
    id: "3",
    label: "Pick Up by Buyer",
  },
];

describe("ListRadioGroup Component", () => {
  it("should match snapshot", () => {
    const { toJSON } = renderWithFormikWrapper(
      { test: null },
      <ListRadioGroup name="test" options={testData} />
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
