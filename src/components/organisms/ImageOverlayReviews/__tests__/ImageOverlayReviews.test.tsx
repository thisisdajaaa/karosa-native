import React from "react";
import { renderWithWrapper } from "@app/ci/testHelper";
import ImageOverlayReviews from "../ImageOverlayReviews";

const testData = [
  {
    source: {
      uri: "https://res.cloudinary.com/dyfla7mxr/image/upload/v1614606614/karosa/hinata_dm5sdk.png",
    },
    hasOverlay: false,
  },
];

describe("ImageOverlayReviews Component", () => {
  it("should match snapshot", () => {
    const { toJSON } = renderWithWrapper(
      <ImageOverlayReviews overlayProps={testData} />
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
