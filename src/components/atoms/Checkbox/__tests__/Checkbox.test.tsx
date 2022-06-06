import React from "react";
import { renderWithWrapper } from "@app/ci/testHelper";
import { noop } from "lodash";
import Checkbox from "../Checkbox";

describe("Checkbox Component", () => {
  it("should match snapshot", () => {
    const { toJSON } = renderWithWrapper(
      <Checkbox value={false} label="test" onPress={noop} />
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
