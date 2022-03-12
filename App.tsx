import React, { useCallback, useEffect, useState } from "react";
import { Provider } from "react-redux";
import { LogBox } from "react-native";
import { InitialState, NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Constants from "expo-constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SplashScreen from "expo-splash-screen";
import { useMount, useLoadAssets } from "@app/hooks";
import { internetCheck } from "@app/utils";
import BaseNavigator from "@app/navigators/index";
import configureStore from "@app/redux/store";
import ToastProvider from "@app/molecules/Toast/context/ToastProvider";

const fonts = {
  "SFProText-Bold": require("./src/assets/fonts/SF-Pro-Text-Bold.otf"),
  "SFProText-Semibold": require("./src/assets/fonts/SF-Pro-Text-Semibold.otf"),
  "SFProText-Regular": require("./src/assets/fonts/SF-Pro-Text-Regular.otf"),
};

export const store = configureStore({});

const NAVIGATION_STATE_KEY = `NAVIGATION_STATE_KEY-${Constants.manifest.sdkVersion}`;

LogBox.ignoreLogs(["Setting a timer"]);
LogBox.ignoreLogs(["Remote debugger"]);

const App = () => {
  const [isNavigationReady, setIsNavigationReady] = useState(!__DEV__);
  const [initialState, setInitialState] = useState<InitialState | undefined>();
  const ready = useLoadAssets([], fonts || {});

  const onInitialLoad = () => {
    internetCheck();

    (async () => {
      await SplashScreen.preventAutoHideAsync();
    })();
  };

  useMount(onInitialLoad);

  useEffect(() => {
    (async () => {
      if (ready) await SplashScreen.hideAsync();
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
    <Provider store={store}>
      <ToastProvider>
        <SafeAreaProvider>
          <NavigationContainer {...{ onStateChange, initialState }}>
            <BaseNavigator />
          </NavigationContainer>
        </SafeAreaProvider>
      </ToastProvider>
    </Provider>
  );
};

export default App;
