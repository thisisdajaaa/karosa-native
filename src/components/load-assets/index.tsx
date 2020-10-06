import React, { useCallback, useEffect, useState } from "react";
import { AppLoading } from "expo";
import { InitialState, NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-community/async-storage";
import Constants from "expo-constants";

import { useLoadAssets } from "../../hooks/use-load-assets";

import { Props } from "./types";

const NAVIGATION_STATE_KEY = `NAVIGATION_STATE_KEY-${Constants.manifest.sdkVersion}`;

const LoadAssets: React.FC<Props> = ({ assets, fonts, children }) => {
  const [isNavigationReady, setIsNavigationReady] = useState(!__DEV__);

  const [initialState, setInitialState] = useState<InitialState | undefined>();

  const ready = useLoadAssets(assets || [], fonts || {});

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
    return <AppLoading />;
  }

  return (
    <NavigationContainer {...{ onStateChange, initialState }}>
      {children}
    </NavigationContainer>
  );
};

export default LoadAssets;
