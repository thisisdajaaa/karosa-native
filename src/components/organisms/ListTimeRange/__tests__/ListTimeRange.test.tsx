import React from "react";
import { renderWithFormikWrapper } from "@app/ci/testHelper";
import ListTimeRange from "../ListTimeRange";

describe("ListSwitch Component", () => {
  it("should match snapshot", () => {
    const { toJSON } = renderWithFormikWrapper(
      { startName: null, endName: null },
      <ListTimeRange startName="startTime" endName="endTime" label="test" />
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
