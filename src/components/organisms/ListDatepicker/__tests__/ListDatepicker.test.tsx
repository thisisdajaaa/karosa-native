import React from "react";
import { renderWithFormikWrapper } from "@app/ci/testHelper";
import ListDatepicker from "../ListDatepicker";

describe("ListDatepicker Component", () => {
  it("should match snapshot", () => {
    const { toJSON } = renderWithFormikWrapper(
      { test: null },
      <ListDatepicker label="testLabel" name="test" />
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
