import React from "react";
import { renderWithFormikWrapper } from "@app/ci/testHelper";
import { COMMON } from "@app/constants";
import FormImagePicker from "../FormImagePicker";

describe("FormImagePicker Component", () => {
  it("should match snapshot", () => {
    const { toJSON } = renderWithFormikWrapper(
      { test: null },
      <FormImagePicker name="test" variation={COMMON.VARIATION.ONE} />
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
