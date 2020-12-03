import React from "react";
import { FormikContext, useFormik } from "formik";
import { View } from "react-native";
import { BaseText } from "@app/components/base-text";
import { AppButton } from "@app/components/button";
import { BottomSheet } from "@app/components/bottom-sheet";
import { SubmitButton } from "@app/components/formik/submit-button";
import { FormCheckbox } from "@app/components/formik/form-checkbox";
import { Props as ButtonProps } from "@app/components/button/types";
import { Props as SubmitButtonProps } from "@app/components/formik/submit-button/types";

import { Props } from "./types";
import { styles } from "./styles";

const DeleteShopModal: React.FC<Props> = ({ sheetRef }) => {
  const formikBag = useFormik({
    initialValues: {
      firstReason: false,
      secondReason: false,
      thirdReason: false,
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
      <BottomSheet height={475} ref={sheetRef}>
        <BaseText style={styles.txtDeleteShop}>Delete Shop</BaseText>
        <BaseText style={styles.txtDeleteShopPar}>
          We are sad that you don't want to be a seller anymore, but please note
          that shop deletion is not irreversable. Shop settings and products
          will be deleted as well.
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
        </View>
        <View style={styles.buttonContainer}>
          <SubmitButton {...deleteButtonProps} />
          <AppButton {...cancelButtonProps} />
        </View>
      </BottomSheet>
    </FormikContext.Provider>
  );
};

export default DeleteShopModal;
