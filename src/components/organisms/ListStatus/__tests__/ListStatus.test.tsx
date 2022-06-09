import React from "react";
import { noop } from "lodash";
import { renderWithWrapper } from "@app/ci/testHelper";
import { theme } from "@app/styles";
import ListStatus from "../ListStatus";

describe("ListStatus Component", () => {
  it("should match snapshot", () => {
    const { toJSON } = renderWithWrapper(
      <ListStatus
        color={theme.colors.blue10}
        label="test"
        onPress={noop}
        value="test"
        hasBottomDivider
      />
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
