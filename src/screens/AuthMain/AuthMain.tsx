/**
 *
 * LoginMain
 * @format
 *
 */

import React, { FC, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { actions } from "@app/redux/auth";
import { useMount } from "@app/hooks";
import routes from "@app/navigators/routes";
import { BottomSheet } from "@app/components/bottom-sheet";
import AuthMainTemplate from "@app/components/templates/AuthMain";

import { BTM_SHEET_HEIGHT } from "./config";
import type { PropsType } from "./types";

const AuthMain: FC<PropsType> = (props: PropsType) => {
  const dispatch = useDispatch();

  const { sheetRef } = props;
  const { navigate } = useNavigation();

  const setAuthOpen = useCallback(
    (value: boolean) => dispatch(actions.setAuthOpen(value)),
    [dispatch]
  );

  useMount(() => {
    setAuthOpen(true);
  });

  const handleHelp = useCallback(() => {
    sheetRef.current?.close();
    navigate(routes.AUTH_HELP);
  }, [navigate]);

  const handleLogin = useCallback(() => {
    sheetRef.current?.close();
    navigate(routes.AUTH_LOGIN);
  }, [navigate]);

  const handleGoogle = () => {
    0;
  };

  const handleFb = () => {
    0;
  };

  const handleSignUp = useCallback(() => {
    sheetRef.current?.close();
    navigate(routes.AUTH_SIGNUP);
  }, [navigate]);

  return (
    <BottomSheet
      ref={sheetRef}
      onClose={() => setAuthOpen(false)}
      height={BTM_SHEET_HEIGHT}>
      <AuthMainTemplate
        onHelp={handleHelp}
        onLogin={handleLogin}
        onFBLogin={handleFb}
        onGoogleLogin={handleGoogle}
        onSignUp={handleSignUp}
      />
    </BottomSheet>
  );
};

export default AuthMain;
