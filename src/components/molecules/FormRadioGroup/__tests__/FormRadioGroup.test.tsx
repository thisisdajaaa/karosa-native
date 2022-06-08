import React from "react";
import { renderWithFormikWrapper } from "@app/ci/testHelper";
import type { Option } from "../types";
import FormRadioGroup from "../FormRadioGroup";

const testData: Option[] = [
  {
    id: "1",
    label: "random",
  },
];

describe("FormRadioGroup Component", () => {
  it("should match snapshot", () => {
    const { toJSON } = renderWithFormikWrapper(
      { test: "" },
      <FormRadioGroup name="test" options={testData} />
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
