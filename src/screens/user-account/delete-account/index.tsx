import React from "react";
import { FormikContext, useFormik } from "formik";
import { View } from "react-native";
import { BaseText } from "@app/components/base-text";
import { AppButton } from "@app/components/button";
import { SubmitButton } from "@app/components/formik/submit-button";
import { BottomSheet } from "@app/components/bottom-sheet";
import { FormCheckbox } from "@app/components/formik/form-checkbox";
import { Props as ButtonProps } from "@app/components/button/types";
import { Props as SubmitButtonProps } from "@app/components/formik/submit-button/types";
import { MODAL_SIZE } from "@app/constants";

import { Props } from "./types";
import { styles } from "./styles";

const DeleteAccountModal: React.FC<Props> = ({ sheetRef }) => {
  const formikBag = useFormik({
    initialValues: {
      firstReason: false,
      secondReason: false,
      thirdReason: false,
      fourthReason: false,
    },
    onSubmit: () => console.log("submit form"),
  });

  const deleteButtonProps: SubmitButtonProps = {
    title: "Delete",
  };

  const cancelButtonProps: ButtonProps = {
    onPress: () => sheetRef.current?.close(),
    title: "Cancel",
    containerStyle: styles.btnCancelContainer,
    textStyle: styles.txtBtnCancel,
  };

  return (
    <FormikContext.Provider value={formikBag}>
      <BottomSheet height={MODAL_SIZE.DEL_ACC_MODAL} ref={sheetRef}>
        <BaseText style={styles.txtDeleteAcc}>Delete Account</BaseText>
        <BaseText style={styles.txtDeleteAccPar}>
          We are sad that you want to leave us, but please note that account
          deletion is not irreversable. Please tell us your reason for leaving.
        </BaseText>

        <View style={styles.checkBoxContainer}>
          <FormCheckbox
            label="I have this reason to delete"
            name="firstReason"
          />
          <FormCheckbox
            label="I have this reason to delete"
            name="secondReason"
          />
          <FormCheckbox
            label="I have this reason to delete"
            name="thirdReason"
          />
          <FormCheckbox
            label="I have this reason to delete"
            name="fourthReason"
          />
        </View>
        <View style={styles.buttonContainer}>
          <SubmitButton {...deleteButtonProps} />
          <AppButton {...cancelButtonProps} />
        </View>
      </BottomSheet>
    </FormikContext.Provider>
  );
};

export default DeleteAccountModal;
