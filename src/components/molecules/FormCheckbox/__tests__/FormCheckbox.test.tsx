import React from "react";
import { renderWithFormikWrapper } from "@app/ci/testHelper";
import FormCheckbox from "../FormCheckbox";

describe("FormCheckbox Component", () => {
  it("should match snapshot", () => {
    const { toJSON } = renderWithFormikWrapper(
      { test: false },
      <FormCheckbox label="testLabel" name="test" />
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
