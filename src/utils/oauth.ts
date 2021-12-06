import * as Google from "expo-google-app-auth";
import { GoogleLogInConfig } from "expo-google-app-auth";
import { Dispatch } from "react";
import { initializeAsync, logInWithReadPermissionsAsync } from "expo-facebook";
import { KAROSA_ANDROID, KAROSA_APP_ID, KAROSA_IOS } from "@env";

const config: GoogleLogInConfig = {
  androidClientId: KAROSA_ANDROID,
  iosClientId: KAROSA_IOS,
  scopes: ["profile", "email"],
};

export const signInWithGoogle = async (
  setIsGoogleButtonLoading: Dispatch<React.SetStateAction<boolean>>
) => {
  setIsGoogleButtonLoading(true);

  try {
    const result = await Google.logInAsync(config);

    if (result.type === "success") {
      const { accessToken, user } = result;

      setIsGoogleButtonLoading(false);

      return {
        accessToken,
        user,
      };
    }

    return Promise.reject();
  } catch (error) {
    setIsGoogleButtonLoading(false);
    return { error };
  }
};

export const signOutGoogle = async (accessToken: string | null) => {
  if (accessToken) {
    await Google.logOutAsync({ accessToken, ...config });
  }
};

export const signInWithFb = async (
  setIsFbuttonLoading: Dispatch<React.SetStateAction<boolean>>
) => {
  setIsFbuttonLoading(true);

  try {
    await initializeAsync({
      appId: KAROSA_APP_ID,
    });

    const result = await logInWithReadPermissionsAsync({
      permissions: ["public_profile", "email"],
    });

    if (result.type === "success") {
      const { token } = result;

      setIsFbuttonLoading(false);

      return { token };
    }

    return Promise.reject();
  } catch (error) {
    setIsFbuttonLoading(false);
    return { error };
  }
};
