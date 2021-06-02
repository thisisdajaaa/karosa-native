/**
 *
 * LoginMain
 * @format
 *
 */

import React, { FC, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ENUM } from "@app/constants";
import { actions } from "@app/redux/auth";
import { useMount } from "@app/hooks";
import { signInWithFb, signInWithGoogle } from "@app/utils";
import routes from "@app/navigators/routes";
import BottomSheet from "@app/molecules/BottomSheet";
import AuthMainTemplate from "@app/templates/AuthMain";

import type { PropsType } from "./types";
import {
  GOOGLE_ACCESS_TOKEN,
  BTM_SHEET_HEIGHT,
  GOOGLE_USER_DATA,
  FB_ACCESS_TOKEN,
} from "./config";

const AuthMainScreen: FC<PropsType> = (props) => {
  const dispatch = useDispatch();

  const { sheetRef } = props;
  const { navigate } = useNavigation();

  const [isGoogleButtonLoading, setIsGoogleButtonLoading] =
    useState<boolean>(false);
  const [isFbButtonLoading, setIsFbButtonLoading] = useState<boolean>(false);

  const setAuthOpen = useCallback(
    (value: boolean) => dispatch(actions.setAuthOpen(value)),
    [dispatch]
  );

  const setOAuth = useCallback(
    (value: ENUM.OAuth) => dispatch(actions.setOAuth(value)),
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

  const handleSignUp = useCallback(() => {
    sheetRef.current?.close();
    navigate(routes.AUTH_PHONENUMBER);
  }, [navigate]);

  const handleGoogle = async () => {
    try {
      const result = await signInWithGoogle(setIsGoogleButtonLoading);

      if (result.user) {
        setOAuth(ENUM.OAuth.Google);
        AsyncStorage.setItem(
          GOOGLE_ACCESS_TOKEN,
          JSON.stringify(result.accessToken)
        );
        AsyncStorage.setItem(GOOGLE_USER_DATA, JSON.stringify(result.user));
        sheetRef.current?.close();
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  const handleFb = async () => {
    try {
      const result = await signInWithFb(setIsFbButtonLoading);

      if (result.token) {
        setOAuth(ENUM.OAuth.Facebook);
        AsyncStorage.setItem(FB_ACCESS_TOKEN, JSON.stringify(result.token));
        sheetRef.current?.close();
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <BottomSheet
      ref={sheetRef}
      onClose={() => setAuthOpen(false)}
      height={BTM_SHEET_HEIGHT}>
      <AuthMainTemplate
        isGoogleButtonLoading={isGoogleButtonLoading}
        isFbButtonLoading={isFbButtonLoading}
        onHelp={handleHelp}
        onLogin={handleLogin}
        onSignUp={handleSignUp}
        onFBLogin={handleFb}
        onGoogleLogin={handleGoogle}
      />
    </BottomSheet>
  );
};

export default AuthMainScreen;
