import React from "react";
import { noop } from "lodash";
import { EvilIcons } from "@expo/vector-icons";
import { renderWithWrapper } from "@app/ci/testHelper";
import AccountActions from "../AccountActions";

describe("AccountActions Component", () => {
  it("should match snapshot", () => {
    const { toJSON } = renderWithWrapper(
      <AccountActions
        actions={[
          {
            icon: <EvilIcons name="credit-card" />,
            label: "To Pay",
            onPress: noop,
          },
        ]}
      />
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
