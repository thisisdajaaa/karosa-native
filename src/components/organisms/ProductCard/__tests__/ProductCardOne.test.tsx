import React from "react";
import { renderWithWrapper } from "@app/ci/testHelper";
import { COMMON } from "@app/constants";
import ProductCard from "../ProductCard";

describe("ProductCard variation one Component", () => {
  it("should match snapshot", () => {
    const { toJSON } = renderWithWrapper(
      <ProductCard name="test" variation={COMMON.VARIATION.ONE} />
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
