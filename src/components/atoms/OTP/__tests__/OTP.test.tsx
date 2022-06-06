import React from "react";
import { renderWithWrapper } from "@app/ci/testHelper";
import OTP from "../OTP";

describe("OTP Component", () => {
  it("should match snapshot", () => {
    const { toJSON } = renderWithWrapper(<OTP inputLength={2} />);

    expect(toJSON()).toMatchSnapshot();
  });
});
