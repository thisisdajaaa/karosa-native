import React from "react";
import { renderWithWrapper } from "@app/ci/testHelper";
import Ribbon from "../Ribbon";

describe("Ribbon Component", () => {
  it("should match snapshot", () => {
    const { toJSON } = renderWithWrapper(<Ribbon />);

    expect(toJSON()).toMatchSnapshot();
  });
});
