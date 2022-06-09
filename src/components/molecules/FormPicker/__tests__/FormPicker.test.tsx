import React from "react";
import { renderWithFormikWrapper } from "@app/ci/testHelper";
import type { PickerData } from "@app/redux/api-models/common";
import FormPicker from "../FormPicker";

const testData: PickerData[] = [
  {
    label: "Random",
    value: "random",
  },
];

describe("FormOTP Component", () => {
  it("should match snapshot", () => {
    const { toJSON } = renderWithFormikWrapper(
      { test: "" },
      <FormPicker
        name="test"
        data={testData}
        placeholder="select a test data"
      />
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
