import React, { useEffect } from "react";
import { Alert, BackHandler, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import NetInfo from "@react-native-community/netinfo";
import { BaseText } from "@app/components/base-text";
import { LIMITS } from "@app/constants";
import routes from "@app/navigators/routes";

import { styles } from "./styles";

const SplashScreen: React.FC = () => {
  const { navigate } = useNavigation();

  useEffect(() => {
    internetCheck();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const internetCheck = () =>
    NetInfo.fetch().then((state) => {
      if (!state.isConnected) {
        // No internet connection, alert user
        Alert.alert(
          "No internet connection",
          "Make sure that WI-FI or mobile data is turned on, then try again",
          [
            {
              text: "cancel",
              onPress: () => BackHandler.exitApp(),
              style: "cancel",
            },
            { text: "ok", onPress: () => internetCheck() },
          ],
          { cancelable: false }
        );
      } else {
        appStartLogic();
      }
    });

  const appStartLogic = () => {
    setTimeout(() => navigate(routes.HOME), LIMITS.splashScreenWaitTime);
  };

  return (
    <View>
      <BaseText style={styles.txtTitle}>Temp Splash Screen</BaseText>
    </View>
  );
};

export default SplashScreen;
