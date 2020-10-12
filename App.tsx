import React from "react";
import { Provider } from "react-redux";

import LoadAssets from "./src/components/load-assets";
import configureStore from "./src/redux/store";
// import AuthNavigator from "./src/navigators/auth";
import UserAccountMainScreen from "./src/screens/user-account";

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
        <UserAccountMainScreen />
      </Provider>
    </LoadAssets>
  );
}
