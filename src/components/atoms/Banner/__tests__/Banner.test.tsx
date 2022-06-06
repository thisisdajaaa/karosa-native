import React from "react";
import { renderWithWrapper } from "@app/ci/testHelper";
import Banner from "../Banner";

const carouselList = [
  {
    source: "https://picsum.photos/200/300",
  },
  {
    source: "https://picsum.photos/200/300",
  },
  {
    source: "https://picsum.photos/200/300",
  },
];

global.requestAnimationFrame = function (callback) {
  return setTimeout(callback, 0);
};

global.cancelAnimationFrame = function (id) {
  clearTimeout(id);
};

describe("Banner Component", () => {
  it("should match snapshot", () => {
    const { toJSON } = renderWithWrapper(
      <Banner carouselData={carouselList} />
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
