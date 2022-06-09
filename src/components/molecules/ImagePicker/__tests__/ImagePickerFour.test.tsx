import React from "react";
import { noop } from "lodash";
import { renderWithWrapper } from "@app/ci/testHelper";
import { COMMON } from "@app/constants";
import ImagePicker from "../ImagePicker";

describe("ImagePicker variation four Component", () => {
  it("should match snapshot", () => {
    const { toJSON } = renderWithWrapper(
      <ImagePicker
        onChange={(_img) => noop()}
        uri=""
        variation={COMMON.VARIATION.FOUR}
      />
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
