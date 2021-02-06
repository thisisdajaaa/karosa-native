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

const Home: FC<PropsType> = (props: PropsType) => {
  const { screenProps } = props;

  return (
    <Screen {...screenProps}>
      <BaseText text={"HOME"} />
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
