/**
 *
 * Home
 * @format
 *
 */

import React, { FC } from "react";
import Header from "@app/molecules/Header";

import HomeStyles from "./styles";
import Button from "@app/atoms/Button";
import { useNavigation } from "@react-navigation/native";
import routes from "@app/navigators/routes";

const HomeTemplate: FC = () => {
  const { goBack, navigate } = useNavigation();
  return (
    <>
      <Header
        hasBottomDivider
        centerComponent={{
          text: "Home",
          style: HomeStyles.txtHeader,
        }}
      />

      <Button
        title="Redirect for testing"
        onPress={() => {
          navigate("Stack", {
            screen: routes.ACCOUNTS_ADDRESS,
            params: {
              map: "test",
            },
          });
        }}
      />
    </>
  );
};

export default HomeTemplate;
