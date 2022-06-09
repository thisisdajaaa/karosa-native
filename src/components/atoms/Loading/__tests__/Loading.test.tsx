import React from "react";
import { renderWithWrapper } from "@app/ci/testHelper";
import Loading from "../Loading";

describe("Loading Component", () => {
  it("should match snapshot", () => {
    const { toJSON } = renderWithWrapper(<Loading />);

    expect(toJSON()).toMatchSnapshot();
  });
});
