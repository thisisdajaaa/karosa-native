/**
 *
 * LoginMain
 * @format
 *
 */

import React, { FC } from "react";
import { useNavigation } from "@react-navigation/native";

import AuthMainTemplate from "@app/templates/AuthMain";
import type { AuthMainHeaderProps } from "@app/templates/AuthMain/types";
import routes from "@app/navigators/routes";

import type { PropsType } from "./types";

const AuthMain: FC<PropsType> = (props: PropsType) => {
  const { navigate } = useNavigation();
  const { onLogin } = props;

  const headerProps: AuthMainHeaderProps = {
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
    <AuthMainTemplate
      signInButtonProps={{
        title: "Phone number / Username / Email",
        loading: false,
      }}
      onLogin={onPress}
      onFBLogin={onPressFB}
      onGoogleLogin={onPressGoogle}
      header={headerProps}
    />
  );
};

export default AuthMain;
