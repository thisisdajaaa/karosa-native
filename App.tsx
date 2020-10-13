import React from "react";
import { Provider } from "react-redux";

import LoadAssets from "./src/components/load-assets";
import MainNavigator from "./src/navigators/main-tabs";
// import AuthNavigator from "./src/navigators/auth";
import configureStore from "./src/redux/store";

const fonts = {
  "SFProText-Bold": require("./assets/fonts/SF-Pro-Text-Bold.otf"),
  "SFProText-Semibold": require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
  "SFProText-Regular": require("./assets/fonts/SF-Pro-Text-Regular.otf"),
};

export const store = configureStore({});

export default function App() {
  return (
    <LoadAssets {...{ fonts }}>
      <Provider store={store}>
        {/* <AuthNavigator /> */}
        <MainNavigator />
      </Provider>
    </LoadAssets>
  );
}
