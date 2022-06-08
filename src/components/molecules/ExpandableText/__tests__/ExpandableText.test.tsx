import React from "react";
import { renderWithWrapper } from "@app/ci/testHelper";
import ExpandableText from "../ExpandableText";

describe("ExpandableText Component", () => {
  it("should match snapshot", () => {
    const { toJSON } = renderWithWrapper(<ExpandableText text="test" />);
    expect(toJSON()).toMatchSnapshot();
  });
});
