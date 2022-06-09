import React from "react";
import { renderWithFormikWrapper } from "@app/ci/testHelper";
import FormSwitch from "../FormSwitch";

describe("FormSwitch Component", () => {
  it("should match snapshot", () => {
    const { toJSON } = renderWithFormikWrapper(
      { test: false },
      <FormSwitch name="test" />
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
