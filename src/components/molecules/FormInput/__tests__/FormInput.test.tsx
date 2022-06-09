import React from "react";
import { renderWithFormikWrapper } from "@app/ci/testHelper";
import FormInput from "../FormInput";

describe("FormInput Component", () => {
  it("should match snapshot", () => {
    const { toJSON } = renderWithFormikWrapper(
      { test: "" },
      <FormInput name="test" />
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
