import React from "react";
import { renderWithWrapper } from "@app/ci/testHelper";
import Text from "@app/atoms/Text";
import Card from "../Card";

describe("Card Component", () => {
  it("should match snapshot", () => {
    const { toJSON } = renderWithWrapper(
      <Card>
        <Text text="test" />
      </Card>
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
