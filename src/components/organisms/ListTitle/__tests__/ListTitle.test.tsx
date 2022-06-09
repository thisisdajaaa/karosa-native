import React from "react";
import { renderWithWrapper } from "@app/ci/testHelper";
import ListTitle from "../ListTitle";

describe("ListTitle Component", () => {
  it("should match snapshot", () => {
    const { toJSON } = renderWithWrapper(<ListTitle label="test" />);

    expect(toJSON()).toMatchSnapshot();
  });
});
