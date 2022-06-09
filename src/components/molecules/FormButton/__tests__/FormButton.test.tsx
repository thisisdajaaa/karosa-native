import React from "react";
import { renderWithFormikWrapper } from "@app/ci/testHelper";
import FormButton from "../FormButton";

describe("FormButton Component", () => {
  it("should match snapshot", () => {
    const { toJSON } = renderWithFormikWrapper({}, <FormButton title="test" />);
    expect(toJSON()).toMatchSnapshot();
  });
});
