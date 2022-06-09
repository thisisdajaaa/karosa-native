import React from "react";
import { renderWithWrapper } from "@app/ci/testHelper";
import Icon from "@app/atoms/Icon";
import IconLabel from "../IconLabel";

describe("IconLabel Component", () => {
  it("should match snapshot", () => {
    const { toJSON } = renderWithWrapper(
      <IconLabel
        icon={<Icon group="login" name="phone" width={20} height={20} />}
        subtitle="test"
        title="test"
      />
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
