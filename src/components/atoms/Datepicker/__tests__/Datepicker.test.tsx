import React from "react";
import { noop } from "lodash";
import { renderWithWrapper } from "@app/ci/testHelper";
import Datepicker from "../Datepicker";

describe("Datepicker Component", () => {
  it("should match snapshot", () => {
    const { toJSON } = renderWithWrapper(
      <Datepicker value="2022/06/07" onChange={(_text) => noop()} />
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
