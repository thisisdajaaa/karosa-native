import React from "react";
import { FormikContext, useFormik } from "formik";
import { View } from "react-native";
import Text from "@app/atoms/Text";
import Button from "@app/atoms/Button";
import { PropsType as ButtonProps } from "@app/atoms/Button/types";
import SubmitButton from "@app/molecules/FormButton";
import BottomSheet from "@app/atoms/BottomSheet";
import FormCheckbox from "@app/molecules/FormCheckbox";

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

  const deleteButtonProps: ButtonProps = {
    title: "Delete",
  };

  const cancelButtonProps: ButtonProps = {
    onPress: () => sheetRef.current?.close(),
    title: "Cancel",
    containerStyle: styles.btnCancelContainer,
    textStyle: styles.txtBtnCancel,
    variation: 2,
  };

  return (
    <FormikContext.Provider value={formikBag}>
      <BottomSheet height={475} ref={sheetRef}>
        <Text text="Delete Account" textStyle={styles.txtDeleteAcc} />
        <Text
          text="We are sad that you want to leave us, but please note that account
          deletion is not irreversable. Please tell us your reason for leaving."
          textStyle={styles.txtDeleteAccPar}
        />

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
          <Button {...cancelButtonProps} />
        </View>
      </BottomSheet>
    </FormikContext.Provider>
  );
};

export default DeleteAccountModal;
