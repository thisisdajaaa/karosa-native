import React from "react";
import { renderWithFormikWrapper } from "@app/ci/testHelper";
import FormOTP from "../FormOTP";

describe("FormOTP Component", () => {
  it("should match snapshot", () => {
    const { toJSON } = renderWithFormikWrapper(
      { test: "" },
      <FormOTP name="test" inputLength={2} />
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
