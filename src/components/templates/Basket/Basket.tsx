/**
 *
 * Basket
 * @format
 *
 */

import React, { FC } from "react";
import Header from "@app/molecules/Header";

import BasketStyles from "./styles";

const BasketTemplate: FC = () => {
  return (
    <>
      <Header
        hasBottomDivider
        centerComponent={{
          text: "Basket",
          style: BasketStyles.txtHeader,
        }}
      />
    </>
  );
};

export default BasketTemplate;
