/**
 *
 * AuthHelp
 * @format
 *
 */

import React, { FC, useCallback } from "react";
import { useNavigation } from "@react-navigation/native";

import AuthHelpTemplate from "@app/components/templates/AuthHelp";

import type { PropsType } from "./types";

const AuthHelp: FC<PropsType> = () => {
  const { goBack } = useNavigation();

  const handleBack = useCallback(() => {
    goBack();
  }, [goBack]);

  return <AuthHelpTemplate onBack={handleBack} />;
};

export default AuthHelp;
