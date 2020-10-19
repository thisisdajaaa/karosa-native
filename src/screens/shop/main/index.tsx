import React from "react";
import { View } from "react-native";
import { Screen } from "@app/components/base-screen";

import { styles } from "./styles";
import ProfileHeader from "./profile-header";
import ActionPhase from "./action-phase";
import Choices from "./choices";

const ShopMainScreen = () => {
  return (
    <Screen>
      <View style={styles.mainContainer}>
        <ProfileHeader />

        <ActionPhase />

        <Choices />
      </View>
    </Screen>
  );
};

export default ShopMainScreen;
