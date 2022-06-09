import React from "react";
import { renderWithWrapper } from "@app/ci/testHelper";
import ImageOverlay from "../ImageOverlay";

const FAKE_URI = "https://i.imgur.com/0y8Ftya.jpg";

describe("ImageOverlay Component", () => {
  it("should match snapshot", () => {
    const { toJSON } = renderWithWrapper(
      <ImageOverlay source={{ uri: FAKE_URI }} />
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
