import React from "react";
import { View } from "react-native";
import { renderWithWrapper } from "@app/ci/testHelper";
import Icons from "..";

describe("Icons Component", () => {
  it("should match snapshot", () => {
    const icon = Icons.products("chatNow", {}, 20, 20);

    const { toJSON } = renderWithWrapper(<View>{icon}</View>);
    expect(toJSON()).toMatchSnapshot();
  });
});
