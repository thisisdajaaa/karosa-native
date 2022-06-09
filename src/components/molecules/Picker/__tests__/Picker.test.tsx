import React from "react";
import { noop } from "lodash";
import { renderWithWrapper } from "@app/ci/testHelper";
import type { PickerData } from "@app/redux/api-models/common";
import Picker from "../Picker";

const testData: PickerData[] = [
  {
    value: 0,
    label: "random",
  },
];

describe("Picker Component", () => {
  it("should match snapshot", () => {
    const { toJSON } = renderWithWrapper(
      <Picker
        data={testData}
        placeholder="select a test value"
        value={0}
        onValueChange={(_value, _index) => noop()}
      />
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
