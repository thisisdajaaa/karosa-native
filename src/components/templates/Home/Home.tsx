/**
 *
 * Home
 * @format
 *
 */

import React, { FC } from "react";
import Header from "@app/molecules/Header";

import HomeStyles from "./styles";

const HomeTemplate: FC = () => {
  return (
    <>
      <Header
        hasBottomDivider
        centerComponent={{
          text: "Home",
          style: HomeStyles.txtHeader,
        }}
      />
    </>
  );
};

export default HomeTemplate;
