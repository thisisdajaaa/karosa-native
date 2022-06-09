import React from "react";
import { renderWithWrapper } from "@app/ci/testHelper";
import ListAvatar from "../ListAvatar";

describe("ListAvatar Component", () => {
  it("should match snapshot", () => {
    const { toJSON } = renderWithWrapper(<ListAvatar />);

    expect(toJSON()).toMatchSnapshot();
  });
});
