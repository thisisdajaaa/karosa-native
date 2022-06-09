import React from "react";
import { noop } from "lodash";
import { renderWithWrapper } from "@app/ci/testHelper";
import { COMMON } from "@app/constants";
import ListChevron from "../ListChevron";

describe("ListChevron variation one Component", () => {
  it("should match snapshot", () => {
    const { toJSON } = renderWithWrapper(
      <ListChevron
        onPress={noop}
        title="test"
        variation={COMMON.VARIATION.ONE}
      />
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
