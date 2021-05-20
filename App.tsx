import React from "react";
import { Provider } from "react-redux";
import LoadAssets from "@app/components/load-assets";
import BaseNavigator from "@app/navigators/index";
import configureStore from "@app/redux/store";

import "@app/config/i18n";

const fonts = {
  "SFProText-Bold": require("./src/assets/fonts/SF-Pro-Text-Bold.otf"),
  "SFProText-Semibold": require("./src/assets/fonts/SF-Pro-Text-Semibold.otf"),
  "SFProText-Regular": require("./src/assets/fonts/SF-Pro-Text-Regular.otf"),
};

export const store = configureStore({});

const App = () => {
  return (
    <Provider store={store}>
      <LoadAssets fonts={fonts}>
        <BaseNavigator />
      </LoadAssets>
    </Provider>
  );
};

export default App;
