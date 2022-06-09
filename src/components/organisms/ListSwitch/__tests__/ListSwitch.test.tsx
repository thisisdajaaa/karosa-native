import React from "react";
import { renderWithFormikWrapper } from "@app/ci/testHelper";
import ListSwitch from "../ListSwitch";

describe("ListSwitch Component", () => {
  it("should match snapshot", () => {
    const { toJSON } = renderWithFormikWrapper(
      { test: false },
      <ListSwitch name="test" />
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
