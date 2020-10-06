import React from "react";
import { Provider } from "react-redux";

import LoadAssets from "@app/components/load-assets";
import BaseNavigator from "@app/navigators/index";
// import AuthNavigator from "@app/navigators/stack-navigator/auth";
import configureStore from "@app/redux/store";

const fonts = {
  "SFProText-Bold": require("./assets/fonts/SF-Pro-Text-Bold.otf"),
  "SFProText-Semibold": require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
  "SFProText-Regular": require("./assets/fonts/SF-Pro-Text-Regular.otf"),
};

export const store = configureStore({});

export default function App() {
  return (
<<<<<<< HEAD
    <Provider store={store}>
      <LoadAssets {...{ fonts }}>
        {/* <AuthNavigator /> */}
        <BaseNavigator />
      </LoadAssets>
    </Provider>
=======
    <LoadAssets {...{ fonts }}>
      <Provider store={store}>
        {/* <AuthNavigator /> */}
        <MainNavigator />
      </Provider>
    </LoadAssets>
>>>>>>> b093ca7... chore: merging User Account Main and common list atom
  );
}
