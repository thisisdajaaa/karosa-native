/**
 *
 * Home
 * @format
 *
 */

import React, { FC } from "react";
import { BaseText } from "@app/components/base-text";
import { Screen } from "@app/components/base-screen";

import type { PropsType } from "./types";
import HomeStyles from "./styles";

const Home: FC<PropsType> = (props: PropsType) => {
  const { screenProps } = props;

  return (
    <Screen {...screenProps}>
      <BaseText>HOME</BaseText>
    </Screen>
  );
};

Home.defaultProps = {
  screenProps: {
    header: { title: "Home" },
    customStyles: HomeStyles.container,
  },
};

export default Home;
