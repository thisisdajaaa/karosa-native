import React from "react";
import { renderWithWrapper } from "@app/ci/testHelper";
import Input from "../Input";

describe("Input Component", () => {
  it("should match snapshot", () => {
    const { toJSON } = renderWithWrapper(<Input value="test" />);

    expect(toJSON()).toMatchSnapshot();
  });
});
