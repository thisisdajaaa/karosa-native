import React, { useCallback, useEffect, useState } from "react";
import { InitialState, NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Constants from "expo-constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useLoadAssets } from "@app/hooks";
import * as SplashScreen from "expo-splash-screen";

import { Props } from "./types";

const NAVIGATION_STATE_KEY = `NAVIGATION_STATE_KEY-${Constants.manifest.sdkVersion}`;

const LoadAssets: React.FC<Props> = ({ assets, fonts, children }) => {
  const [isNavigationReady, setIsNavigationReady] = useState(!__DEV__);
  const [initialState, setInitialState] = useState<InitialState | undefined>();
  const ready = useLoadAssets(assets || [], fonts || {});

  useEffect(() => {
    (async () => await SplashScreen.preventAutoHideAsync())();
  }, []);

  useEffect(() => {
    (async () => {
      if (ready) {
        await SplashScreen.hideAsync();
      }
    })();
  }, [isNavigationReady, ready]);

  useEffect(() => {
    const restoreState = async () => {
      try {
        const savedStateString = await AsyncStorage.getItem(
          NAVIGATION_STATE_KEY
        );
        const state = savedStateString
          ? JSON.parse(savedStateString)
          : undefined;
        setInitialState(state);
      } finally {
        setIsNavigationReady(true);
      }
    };
    if (!isNavigationReady) {
      restoreState();
    }
  }, [isNavigationReady]);

  const onStateChange = useCallback(
    (state) =>
      AsyncStorage.setItem(NAVIGATION_STATE_KEY, JSON.stringify(state)),
    []
  );

  if (!ready || !isNavigationReady) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer {...{ onStateChange, initialState }}>
        {children}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default LoadAssets;
