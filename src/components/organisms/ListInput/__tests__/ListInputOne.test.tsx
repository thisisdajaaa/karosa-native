import React from "react";
import { renderWithFormikWrapper } from "@app/ci/testHelper";
import ListInput from "../ListInput";
import { COMMON } from "@app/constants";

describe("ListInput variation one Component", () => {
  it("should match snapshot", () => {
    const { toJSON } = renderWithFormikWrapper(
      { test: "" },
      <ListInput
        label="testLabel"
        name="test"
        placeholder="test"
        variation={COMMON.VARIATION.ONE}
        maxLen={20}
      />
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
