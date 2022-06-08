import React from "react";
import { renderWithWrapper } from "@app/ci/testHelper";
import SearchBar from "../SearchBar";

describe("SearchBar Component", () => {
  it("should match snapshot", () => {
    const { toJSON } = renderWithWrapper(<SearchBar />);
    expect(toJSON()).toMatchSnapshot();
  });
});
