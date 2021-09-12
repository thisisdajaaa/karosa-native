/**
 *
 * UserAccountLogout
 * @format
 *
 */

import React, { FC } from "react";
import { View } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import Text from "@app/atoms/Text";
import Button from "@app/atoms/Button";
import type { PropsType as ButtonProps } from "@app/atoms/Button/types";

import type { PropsType } from "./types";
import UserAccountLogoutStyles from "./styles";

const UserAccountLogoutTemplate: FC<PropsType> = (props) => {
  const { resetState, sheetRef } = props;

  const logoutButtonProps: ButtonProps = {
    onPress: resetState,
    title: "Logout",
  };

  const cancelButtonProps: ButtonProps = {
    onPress: () => sheetRef.current?.close(),
    title: "Cancel",
    containerStyle: UserAccountLogoutStyles.btnCancelContainer,
    textStyle: UserAccountLogoutStyles.txtBtnCancel,
    variation: 2,
  };

  return (
    <>
      <Text text="Logging out" textStyle={UserAccountLogoutStyles.txtLogout} />

      <View style={UserAccountLogoutStyles.subContainer}>
        <SimpleLineIcons
          name="logout"
          style={UserAccountLogoutStyles.logoutIcon}
        />
        <Text
          text="Your profile will be saved. Can't wait to have you back!"
          textStyle={UserAccountLogoutStyles.txtLogoutInfo}
        />
      </View>
      <View style={UserAccountLogoutStyles.buttonContainer}>
        <Button {...logoutButtonProps} />
        <Button {...cancelButtonProps} />
      </View>
    </>
  );
};

export default UserAccountLogoutTemplate;
