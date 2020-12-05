import React from "react";
import { View } from "react-native";
import { useDispatch } from "react-redux";
import { SimpleLineIcons } from "@expo/vector-icons";
import { BaseText } from "@app/components/base-text";
import { BottomSheet } from "@app/components/bottom-sheet";
import { AppButton } from "@app/components/button";
import { Props as ButtonProps } from "@app/components/button/types";
import { resetAllState } from "@app/redux/actions";

import { Props } from "./types";
import { styles } from "./styles";

const LogoutModal: React.FC<Props> = ({ sheetRef }) => {
  const dispatch = useDispatch();

  const logoutButtonProps: ButtonProps = {
    onPress: () => dispatch(resetAllState()),
    title: "Logout",
  };

  const cancelButtonProps: ButtonProps = {
    onPress: () => sheetRef.current?.close(),
    title: "Cancel",
    containerStyle: styles.btnCancelContainer,
    textStyle: styles.txtBtnCancel,
  };

  return (
    <BottomSheet height={407} ref={sheetRef}>
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
    </BottomSheet>
  );
};

export default LogoutModal;
