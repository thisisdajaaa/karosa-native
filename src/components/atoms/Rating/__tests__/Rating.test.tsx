import React from "react";
import { renderWithWrapper } from "@app/ci/testHelper";
import Rating from "../Rating";

const FAKE_URI = "https://i.imgur.com/0y8Ftya.jpg";

describe("Radio Component", () => {
  it("should match snapshot", () => {
    const { toJSON } = renderWithWrapper(
      <Rating
        type="custom"
        ratingCount={5}
        readonly
        imageSize={10}
        startingValue={5}
        ratingImage={{
          source: {
            uri: FAKE_URI,
          },
        }}
      />
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
