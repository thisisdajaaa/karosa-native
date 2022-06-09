import React from "react";
import { renderWithWrapper } from "@app/ci/testHelper";
import { noop } from "lodash";
import Category from "../Category";

describe("Category Component", () => {
  it("should match snapshot", () => {
    const { toJSON } = renderWithWrapper(
      <Category
        id={2}
        iconName="preOrder"
        name="categoryVegetables"
        onPress={noop}
      />
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
