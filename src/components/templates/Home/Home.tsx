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
import routes from "@app/navigators/routes";
import Button from "@app/atoms/Button";
import { useNavigation } from "@react-navigation/native";

const HomeTemplate: FC<PropsType> = (props) => {
  const { screenProps } = props;
  const { navigate } = useNavigation();
  return (
    <Screen {...screenProps}>
      <BaseText text={"HOME"} />

      <Button
        title="Testing only"
        onPress={() => navigate(routes.SHOP_PRODUCT_DETAILS)}
      />
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
