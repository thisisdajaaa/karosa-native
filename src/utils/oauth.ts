import * as Google from "expo-google-app-auth";
import { GoogleLogInConfig } from "expo-google-app-auth";
import { Dispatch } from "react";
import { KAROSA_ANDROID, KAROSA_IOS } from "@env";

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
    } else {
      return { cancelled: true };
    }
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
