import React from "react";
import { renderWithWrapper } from "@app/ci/testHelper";
import DiscountCoupon from "../DiscountCoupon";

describe("DiscountCoupon Component", () => {
  it("should match snapshot", () => {
    const { toJSON } = renderWithWrapper(
      <DiscountCoupon
        minSpendPrice="200"
        discountPrice="200"
        validDate="Nov-20-2021"
      />
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
