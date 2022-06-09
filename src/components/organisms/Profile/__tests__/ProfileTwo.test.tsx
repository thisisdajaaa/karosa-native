import React from "react";
import { noop } from "lodash";
import { renderWithWrapper } from "@app/ci/testHelper";
import { COMMON } from "@app/constants";
import Profile from "../Profile";

const FAKE_URI = "https://i.imgur.com/0y8Ftya.jpg";

describe("Profile variation two Component", () => {
  it("should match snapshot", () => {
    const { toJSON } = renderWithWrapper(
      <Profile
        address="test"
        avatarPhoto={FAKE_URI}
        chatPerf="2"
        coverPhoto={FAKE_URI}
        followers="2"
        isActive
        onBack={noop}
        rating="2"
        shopName="test"
        variation={COMMON.VARIATION.TWO}
      />
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
