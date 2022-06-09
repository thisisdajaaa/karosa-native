import React from "react";
import { renderWithWrapper } from "@app/ci/testHelper";
import Text from "@app/atoms/Text";
import BottomSheet from "../BottomSheet";

describe("BottomSheet Component", () => {
  it("should match snapshot", () => {
    const { toJSON } = renderWithWrapper(
      <BottomSheet height={200}>
        <Text text="test" />
      </BottomSheet>
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
