import React from "react";
import { renderWithFormikWrapper } from "@app/ci/testHelper";
import FormQuantity from "../FormQuantity";

describe("FormQuantity Component", () => {
  it("should match snapshot", () => {
    const { toJSON } = renderWithFormikWrapper(
      { test: "" },
      <FormQuantity name="test" />
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
