/**
 *
 * Home
 * @format
 *
 */

import React, { FC } from "react";
import Header from "@app/molecules/Header";

import HomeStyles from "./styles";
import routes from "@app/navigators/routes";
import Button from "@app/atoms/Button";
import { useNavigation } from "@react-navigation/native";

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
