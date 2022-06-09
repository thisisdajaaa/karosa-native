import React from "react";
import { renderWithWrapper } from "@app/ci/testHelper";
import Header from "../Header";

describe("Header Component", () => {
  it("should match snapshot", () => {
    const { toJSON } = renderWithWrapper(<Header />);
    expect(toJSON()).toMatchSnapshot();
  });
});
