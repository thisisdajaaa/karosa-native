/**
 *
 * @format
 *
 */

// @flow

import { Platform } from "react-native";

export const getPlatform = (() => {
  let instance: "ios" | "android" | "windows" | "macos" | "web";

  return {
    getInstance: () => {
      if (!instance) {
        instance = Platform.OS;
      }

      return instance;
    },
  };
})();
