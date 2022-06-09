import React from "react";
import { noop } from "lodash";
import { renderWithWrapper } from "@app/ci/testHelper";
import TimeRange from "../TimeRange";

describe("TimeRange Component", () => {
  it("should match snapshot", () => {
    const { toJSON } = renderWithWrapper(
      <TimeRange
        startValue="12:00"
        endValue="12:01"
        onStartTimeChange={(_text) => noop()}
        onEndTimeChange={(_text) => noop()}
      />
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
