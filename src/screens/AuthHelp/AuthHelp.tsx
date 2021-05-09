/**
 *
 * AuthHelp
 * @format
 *
 */

import React, { FC, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { actions } from "@app/redux/auth";
import { useMount } from "@app/hooks";
import AuthHelpTemplate from "@app/components/templates/AuthHelp";

import type { PropsType } from "./types";

const AuthHelpScreen: FC<PropsType> = () => {
  const dispatch = useDispatch();

  const { goBack } = useNavigation();

  const setAuthBack = useCallback(
    (value: boolean) => dispatch(actions.setAuthBack(value)),
    [dispatch]
  );

  useMount(() => setAuthBack(false));

  const handleBack = useCallback(() => {
    setAuthBack(true);
    goBack();
  }, [goBack]);

  return <AuthHelpTemplate onBack={handleBack} />;
};

export default AuthHelpScreen;
