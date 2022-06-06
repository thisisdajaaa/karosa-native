import React from "react";
import { renderWithWrapper } from "@app/ci/testHelper";
import Chip from "../Chip";

describe("Chip Component", () => {
  it("should match snapshot", () => {
    const { toJSON } = renderWithWrapper(<Chip selected title="test" />);

    expect(toJSON()).toMatchSnapshot();
  });
});
