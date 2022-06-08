import React from "react";
import { renderWithWrapper } from "@app/ci/testHelper";
import WarningMessage from "../WarningMessage";

describe("WarningMessage Component", () => {
  it("should match snapshot", () => {
    const { toJSON } = renderWithWrapper(<WarningMessage message="test" />);
    expect(toJSON()).toMatchSnapshot();
  });
});
