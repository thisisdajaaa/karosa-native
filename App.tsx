import React from "react";
import { Provider } from "react-redux";
import { LogBox } from "react-native";
import { useMount } from "@app/hooks";
import { internetCheck } from "@app/utils";
import LoadAssets from "@app/components/load-assets";
import BaseNavigator from "@app/navigators/index";
import configureStore from "@app/redux/store";
import ToastProvider from "@app/molecules/Toast/context/ToastProvider";

const fonts = {
  "SFProText-Bold": require("./src/assets/fonts/SF-Pro-Text-Bold.otf"),
  "SFProText-Semibold": require("./src/assets/fonts/SF-Pro-Text-Semibold.otf"),
  "SFProText-Regular": require("./src/assets/fonts/SF-Pro-Text-Regular.otf"),
};

export const store = configureStore({});

LogBox.ignoreLogs(["Setting a timer"]);
LogBox.ignoreLogs(["Remote debugger"]);

const App = () => {
  useMount(internetCheck);

  return (
    <Provider store={store}>
      <ToastProvider>
        <LoadAssets fonts={fonts}>
          <BaseNavigator />
        </LoadAssets>
      </ToastProvider>
    </Provider>
  );
};

export default App;
