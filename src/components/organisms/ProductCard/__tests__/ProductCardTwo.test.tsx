import React from "react";
import { renderWithWrapper } from "@app/ci/testHelper";
import { COMMON } from "@app/constants";
import ProductCard from "../ProductCard";

const FAKE_URI = "https://i.imgur.com/0y8Ftya.jpg";

describe("ProductCard variation two Component", () => {
  it("should match snapshot", () => {
    const { toJSON } = renderWithWrapper(
      <ProductCard
        name="test"
        variation={COMMON.VARIATION.TWO}
        ratingImage={{
          source: {
            uri: FAKE_URI,
          },
        }}
        ratingType="custom"
      />
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
