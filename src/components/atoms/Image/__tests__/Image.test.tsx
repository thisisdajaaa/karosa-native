import React from "react";
import { renderWithWrapper } from "@app/ci/testHelper";
import Image from "../Image";

describe("Image Component", () => {
  const FAKE_URI = "https://i.imgur.com/0y8Ftya.jpg";

  it("should match snapshot", () => {
    const { toJSON } = renderWithWrapper(
      <Image
        source={{
          uri: FAKE_URI,
        }}
      />
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
