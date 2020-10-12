import React from "react";
import { View } from "react-native";

import { styles } from "./styles";
import ProfileHeader from "./profile-header";
import ActionPhase from "./action-phase";

const UserAccountMain = () => {
  return (
    <View style={styles.mainContainer}>
      <ProfileHeader />

      <ActionPhase />
    </View>
  );
};

export default UserAccountMain;
