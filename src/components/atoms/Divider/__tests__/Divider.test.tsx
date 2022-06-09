import React from "react";
import { renderWithWrapper } from "@app/ci/testHelper";
import Divider from "../Divider";

describe("Divider Component", () => {
  it("should match snapshot", () => {
    const { toJSON } = renderWithWrapper(<Divider />);

    expect(toJSON()).toMatchSnapshot();
  });
});
