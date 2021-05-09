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
import BottomSheet from "@app/molecules/BottomSheet";
import AuthMainTemplate from "@app/templates/AuthMain";

import { BTM_SHEET_HEIGHT } from "./config";
import type { PropsType } from "./types";

const AuthMainScreen: FC<PropsType> = (props: PropsType) => {
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
      />
    </BottomSheet>
  );
};

export default AuthMainScreen;
