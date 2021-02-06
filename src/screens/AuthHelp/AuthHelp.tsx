/**
 *
 * AuthHelp
 * @format
 *
 */

import React, { FC } from "react";
import { useNavigation } from "@react-navigation/native";

import AuthHelpTemplate from "@app/components/templates/AuthHelp";
import type { LOGIN_HEADER_PROPS as AuthHelpProps } from "@app/constants";

import type { PropsType } from "./types";

const AuthHelp: FC<PropsType> = () => {
  const { goBack } = useNavigation();

  const loginHeaderProps: AuthHelpProps = {
    iconName: "close",
    title: "Help Centre",
    borderBottom: false,
    press: {
      left: () => goBack(),
    },
  };

  return <AuthHelpTemplate header={loginHeaderProps} />;
};

export default AuthHelp;
