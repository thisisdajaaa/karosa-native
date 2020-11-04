import React from "react";
import RBSheet from "react-native-raw-bottom-sheet";
import { View } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { BaseText } from "@app/components/base-text";
import { AppButton } from "@app/components/button";
import { Props as ButtonProps } from "@app/components/button/types";

import { Props } from "./types";
import { styles } from "./styles";

const LogoutModal: React.FC<Props> = ({ sheetRef }) => {
  const logoutButtonProps: ButtonProps = {
    onPress: () => console.log("logout"),
    title: "Logout",
  };

  const cancelButtonProps: ButtonProps = {
    onPress: () => sheetRef.current?.close(),
    title: "Cancel",
    containerStyle: styles.btnCancelContainer,
    textStyle: styles.txtBtnCancel,
  };

  return (
    <RBSheet
      ref={sheetRef}
      closeOnDragDown={true}
      closeOnPressMask={false}
      height={407}
      customStyles={{
        container: styles.container,
      }}
    >
      <BaseText style={styles.txtLogout}>Logging out</BaseText>

      <View style={styles.subContainer}>
        <SimpleLineIcons name="logout" style={styles.logoutIcon} />

        <BaseText style={styles.txtLogoutInfo}>
          Your profile will be saved. Can't wait to have you back!
        </BaseText>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton {...logoutButtonProps} />
        <AppButton {...cancelButtonProps} />
      </View>
    </RBSheet>
  );
};

export default LogoutModal;
