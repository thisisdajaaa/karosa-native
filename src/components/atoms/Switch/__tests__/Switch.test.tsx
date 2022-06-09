import React from "react";
import { noop } from "lodash";
import { renderWithWrapper } from "@app/ci/testHelper";
import Switch from "../Switch";

describe("Switch Component", () => {
  it("should match snapshot", () => {
    const { toJSON } = renderWithWrapper(
      <Switch onChange={(_value) => noop()} value={true} />
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
