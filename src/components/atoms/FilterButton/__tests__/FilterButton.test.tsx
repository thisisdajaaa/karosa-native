import React from "react";
import { noop } from "lodash";
import { renderWithWrapper } from "@app/ci/testHelper";
import FilterButton from "../FilterButton";

describe("FilterButton Component", () => {
  it("should match snapshot", () => {
    const { toJSON } = renderWithWrapper(
      <FilterButton onPress={noop} title="test" />
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
