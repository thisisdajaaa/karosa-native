import React from "react";
import { renderWithFormikWrapper } from "@app/ci/testHelper";
import ListCheckbox from "../ListCheckbox";

describe("ListCheckbox Component", () => {
  it("should match snapshot", () => {
    const { toJSON } = renderWithFormikWrapper(
      { test: false },
      <ListCheckbox label="testLabel" name="test" />
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
