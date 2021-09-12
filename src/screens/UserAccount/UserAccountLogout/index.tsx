import React from "react";
import { View } from "react-native";
import { useDispatch } from "react-redux";
import { SimpleLineIcons } from "@expo/vector-icons";
import Text from "@app/atoms/Text";
import BottomSheet from "@app/atoms/BottomSheet";
import Button from "@app/atoms/Button";
import { PropsType as ButtonProps } from "@app/atoms/Button/types";
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
    variation: 2,
  };

  return (
    <BottomSheet height={407} ref={sheetRef}>
      <Text text="Logging out" textStyle={styles.txtLogout} />

      <View style={styles.subContainer}>
        <SimpleLineIcons name="logout" style={styles.logoutIcon} />
        <Text
          text="Your profile will be saved. Can't wait to have you back!"
          textStyle={styles.txtLogoutInfo}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button {...logoutButtonProps} />
        <Button {...cancelButtonProps} />
      </View>
    </BottomSheet>
  );
};

export default LogoutModal;
