import React from "react";
import { renderWithWrapper } from "@app/ci/testHelper";
import { noop } from "lodash";
import { ErrorToast } from "../ErrorToast";

describe("ErrorToast Component", () => {
  it("should match snapshot", () => {
    const { toJSON } = renderWithWrapper(<ErrorToast onClose={noop} />);
    expect(toJSON()).toMatchSnapshot();
  });
});
