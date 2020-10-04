import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-community/async-storage";

import { LoadAssets } from "./src/components";
import MainNavigator from "./src/navigators/Main";
import { User } from "./src/models";

const fonts = {
  "SFProText-Bold": require("./assets/fonts/SF-Pro-Text-Bold.otf"),
  "SFProText-Semibold": require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
  "SFProText-Regular": require("./assets/fonts/SF-Pro-Text-Regular.otf"),
};

export default function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    getUser();
  }, [user]);

  async function getUser() {
    const storedUser = await AsyncStorage.getItem("user");

    if (storedUser) {
      const currentUser: User = JSON.parse(storedUser);
      setUser(currentUser);
    } else {
      // NOTE: mocking here.
      setUser({
        username: "a.pappas",
        firstName: "Alexandros",
        lastName: "Pappas",
        email: "a.pappas@karosa.com",
      });
    }
  }

  return (
    <LoadAssets {...{ fonts }}>
      {user ? <MainNavigator /> : <MainNavigator />}
    </LoadAssets>
  );
}
