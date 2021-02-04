/**
 *
 * LoginHelp
 * @format
 *
 */

import React, { FC } from "react";
import { useNavigation } from "@react-navigation/native";

import LoginHelpTemplate from "@app/templates/LoginHelp";
import type { LOGIN_HEADER_PROPS as LoginHelpProps } from "@app/constants";

import type { PropsType } from "./types";

const LoginHelp: FC<PropsType> = () => {
  const { goBack } = useNavigation();

  const loginHeaderProps: LoginHelpProps = {
    iconName: "close",
    title: "Help Centre",
    borderBottom: false,
    press: {
      left: () => goBack(),
    },
  };

  return <LoginHelpTemplate header={loginHeaderProps} />;
};

export default LoginHelp;
