import React from "react";
import { renderWithFormikWrapper } from "@app/ci/testHelper";
import FormSwitch from "@app/molecules/FormSwitch";
import ValidationMessage from "../ValidationMessage";

describe("ValidationMessage Component", () => {
  it("should match snapshot", () => {
    const { toJSON } = renderWithFormikWrapper(
      { test: false },
      <>
        <FormSwitch name="test" />
        <ValidationMessage name="test" />
      </>
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
