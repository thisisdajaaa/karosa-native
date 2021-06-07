import React, { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { View } from "react-native";
import { Screen } from "@app/components/base-screen";
import { actions } from "@app/redux/shop";

import { styles } from "./styles";
import ProfileHeader from "./profile-header";
import ActionPhase from "./action-phase";
import Choices from "./choices";

const UserAccountMainScreen = () => {
  const dispatch = useDispatch();

  const callShopInfoApi = useCallback(
    () => dispatch(actions.callShopInfoApi.request()),
    [dispatch]
  );

  useEffect(() => {
    callShopInfoApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

export default UserAccountMainScreen;
