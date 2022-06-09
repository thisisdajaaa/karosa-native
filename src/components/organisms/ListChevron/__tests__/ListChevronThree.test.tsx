import React from "react";
import { noop } from "lodash";
import { renderWithWrapper } from "@app/ci/testHelper";
import { COMMON } from "@app/constants";
import ListChevron from "../ListChevron";

describe("ListChevron variation three Component", () => {
  it("should match snapshot", () => {
    const { toJSON } = renderWithWrapper(
      <ListChevron
        onPress={noop}
        title="test"
        iconGroup="products"
        iconName="chatNow"
        iconHeight={20}
        iconWidth={20}
        variation={COMMON.VARIATION.THREE}
      />
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
