import React from "react";
import { renderWithFormikWrapper } from "@app/ci/testHelper";
import FormDatepicker from "../FormDatepicker";

describe("FormDatepicker Component", () => {
  it("should match snapshot", () => {
    const { toJSON } = renderWithFormikWrapper(
      { test: null },
      <FormDatepicker name="test" />
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
