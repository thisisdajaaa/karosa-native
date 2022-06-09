import React from "react";
import { noop } from "lodash";
import { renderWithWrapper } from "@app/ci/testHelper";
import Radio from "../Radio";

describe("Radio Component", () => {
  it("should match snapshot", () => {
    const { toJSON } = renderWithWrapper(
      <Radio checked onPress={noop} title="test" />
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
