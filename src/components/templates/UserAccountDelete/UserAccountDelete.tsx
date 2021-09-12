/**
 *
 * UserAccountDelete
 * @format
 *
 */

import React, { FC } from "react";
import { View } from "react-native";
import Text from "@app/atoms/Text";
import Button from "@app/atoms/Button";
import { PropsType as ButtonProps } from "@app/atoms/Button/types";
import SubmitButton from "@app/molecules/FormButton";
import FormCheckbox from "@app/molecules/FormCheckbox";

import type { PropsType } from "./types";
import UserAccountDeleteStyles from "./styles";

const UserAccountDeleteTemplate: FC<PropsType> = (props) => {
  const { sheetRef } = props;

  const deleteButtonProps: ButtonProps = {
    title: "Delete",
  };

  const cancelButtonProps: ButtonProps = {
    onPress: () => sheetRef.current?.close(),
    title: "Cancel",
    containerStyle: UserAccountDeleteStyles.btnCancelContainer,
    textStyle: UserAccountDeleteStyles.txtBtnCancel,
    variation: 2,
  };

  return (
    <>
      <Text
        text="Delete Account"
        textStyle={UserAccountDeleteStyles.txtDeleteAcc}
      />
      <Text
        text="We are sad that you want to leave us, but please note that account
          deletion is not irreversable. Please tell us your reason for leaving."
        textStyle={UserAccountDeleteStyles.txtDeleteAccPar}
      />

      <View style={UserAccountDeleteStyles.checkBoxContainer}>
        <FormCheckbox label="I have this reason to delete" name="firstReason" />
        <FormCheckbox
          label="I have this reason to delete"
          name="secondReason"
        />
        <FormCheckbox label="I have this reason to delete" name="thirdReason" />
        <FormCheckbox
          label="I have this reason to delete"
          name="fourthReason"
        />
      </View>
      <View style={UserAccountDeleteStyles.buttonContainer}>
        <SubmitButton {...deleteButtonProps} />
        <Button {...cancelButtonProps} />
      </View>
    </>
  );
};

export default UserAccountDeleteTemplate;
