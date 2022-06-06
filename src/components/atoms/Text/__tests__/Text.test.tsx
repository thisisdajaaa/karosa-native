import React from "react";
import { renderWithWrapper } from "@app/ci/testHelper";
import Text from "../Text";

describe("Text Component", () => {
  it("should match snapshot", () => {
    const { toJSON } = renderWithWrapper(<Text text="test" />);

    expect(toJSON()).toMatchSnapshot();
  });
});
