import React from "react";
import { renderWithWrapper } from "@app/ci/testHelper";
import Reviews from "../Reviews";

const FAKE_URI = "https://i.imgur.com/0y8Ftya.jpg";

describe("Reviews Component", () => {
  it("should match snapshot", () => {
    const { toJSON } = renderWithWrapper(
      <Reviews
        avatarPhoto={FAKE_URI}
        date="2022-12-12"
        feedback="test"
        rate={2}
        ratingType="custom"
        username="testUsername"
        variation="2"
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
