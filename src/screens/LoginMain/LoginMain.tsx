/**
 *
 * LoginMain
 * @format
 *
 */

import React, { FC } from "react";
import { useNavigation } from "@react-navigation/native";

import LoginMainTemplate from "@app/templates/LoginMain";
import type { LoginMainHeaderProps } from "@app/templates/LoginMain/types";
import routes from "@app/navigators/routes";

import type { PropsType } from "./types";

const LoginMain: FC<PropsType> = (props: PropsType) => {
  const { navigate } = useNavigation();
  const { onLogin } = props;

  const headerProps: LoginMainHeaderProps = {
    borderBottom: false,
    text: {
      left: "Login",
      right: "Help",
    },
    press: {
      right: () => navigate(routes.AUTH_HELP),
    },
  };

  const onPress = () => {
    navigate(routes.AUTH_LOGIN);
    onLogin && onLogin();
  };

  const onPressGoogle = () => {
    console.log("Gmail login");
  };

  const onPressFB = () => {
    console.log("FB login");
  };

  return (
    <LoginMainTemplate
      onLogin={onPress}
      onFBLogin={onPressFB}
      onGoogleLogin={onPressGoogle}
      header={headerProps}
    />
  );
};

export default LoginMain;
