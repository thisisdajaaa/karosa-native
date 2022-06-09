import React from "react";
import { renderWithFormikWrapper } from "@app/ci/testHelper";
import ListInput from "../ListInput";
import { COMMON } from "@app/constants";

describe("ListInput variation two Component", () => {
  it("should match snapshot", () => {
    const { toJSON } = renderWithFormikWrapper(
      { test: "" },
      <ListInput
        label="testLabel"
        name="test"
        placeholder="test"
        variation={COMMON.VARIATION.TWO}
        hasBottomDivider
        required
      />
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
