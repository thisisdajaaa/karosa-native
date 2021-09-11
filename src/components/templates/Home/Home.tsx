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

<<<<<<< HEAD
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
=======
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
>>>>>>> 9e2ca53... feat(bug fix on footer): bug fix on footer
  );
};

export default HomeTemplate;
