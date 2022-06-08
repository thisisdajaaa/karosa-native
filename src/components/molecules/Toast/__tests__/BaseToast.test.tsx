import React from "react";
import { renderWithWrapper } from "@app/ci/testHelper";
import { noop } from "lodash";
import BaseToast from "../BaseToast";

describe("BaseToast Component", () => {
  it("should match snapshot", () => {
    const { toJSON } = renderWithWrapper(<BaseToast onClose={noop} />);
    expect(toJSON()).toMatchSnapshot();
  });
});
