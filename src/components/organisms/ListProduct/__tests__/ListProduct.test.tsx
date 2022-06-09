import React from "react";
import { noop } from "lodash";
import { renderWithWrapper } from "@app/ci/testHelper";
import ListProduct from "../ListProduct";

const FAKE_URI = "https://i.imgur.com/0y8Ftya.jpg";

describe("ListProduct Component", () => {
  it("should match snapshot", () => {
    const { toJSON } = renderWithWrapper(
      <ListProduct
        image={FAKE_URI}
        likes={2}
        onBoost={noop}
        onDiscontinue={noop}
        onEdit={noop}
        price="P2"
        productName="test"
        rating={2}
        sold={2}
        stock={2}
        hasBottomDivider
      />
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
