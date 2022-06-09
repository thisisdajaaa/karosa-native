import React from "react";
import { noop } from "lodash";
import { renderWithWrapper } from "@app/ci/testHelper";
import Quantity from "../Quantity";

describe("Quantity Component", () => {
  it("should match snapshot", () => {
    const { toJSON } = renderWithWrapper(
      <Quantity onDecrement={noop} onIncrement={noop} value="2" />
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
