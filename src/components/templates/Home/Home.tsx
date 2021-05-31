/**
 *
 * Home
 * @format
 *
 */

import React, { FC } from "react";
import BaseText from "@app/atoms/Text";
import { Screen } from "@app/components/base-screen";

import type { PropsType } from "./types";
import HomeStyles from "./styles";

const HomeTemplate: FC<PropsType> = (props) => {
  const { screenProps } = props;

  return (
    <Screen {...screenProps}>
      <BaseText text={"HOME"} />
    </Screen>
  );
};

HomeTemplate.defaultProps = {
  screenProps: {
    header: { title: "Home" },
    customStyles: HomeStyles.container,
  },
};

export default HomeTemplate;
