import React from "react";
import { renderWithFormikWrapper } from "@app/ci/testHelper";
import FormTimeRange from "../FormTimeRange";

describe("FormTimeRange Component", () => {
  it("should match snapshot", () => {
    const { toJSON } = renderWithFormikWrapper(
      { startTest: "", endTest: "" },
      <FormTimeRange startName="startTest" endName="endTest" />
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
