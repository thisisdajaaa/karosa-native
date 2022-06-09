import React from "react";
import { renderWithWrapper } from "@app/ci/testHelper";
import Image from "../Image";

const FAKE_URI = "https://i.imgur.com/0y8Ftya.jpg";

describe("Image Component", () => {
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
