import React from "react";
import { renderWithWrapper } from "@app/ci/testHelper";
import ListAction from "../ListAction";

describe("ListAction Component", () => {
  it("should match snapshot", () => {
    const { toJSON } = renderWithWrapper(<ListAction />);

    expect(toJSON()).toMatchSnapshot();
  });
});
