import React from "react";
import { noop } from "lodash";
import { renderWithWrapper } from "@app/ci/testHelper";
import Button from "../Button";

describe("Button Component", () => {
  it("should match snapshot", () => {
    const { toJSON } = renderWithWrapper(
      <Button onPress={noop} title="test" />
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
