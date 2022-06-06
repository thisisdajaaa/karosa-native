import React from "react";
import { renderWithWrapper } from "@app/ci/testHelper";
import Icon from "../Icon";

describe("Icon Component", () => {
  it("should match snapshot", () => {
    const { toJSON } = renderWithWrapper(
      <Icon group="products" name="chatNow" height={20} width={20} />
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
