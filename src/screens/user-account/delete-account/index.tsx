import React, { useMemo } from "react";
import RBSheet from "react-native-raw-bottom-sheet";
import { FormikContext, useFormik } from "formik";
import { View } from "react-native";
import { BaseText } from "@app/components/base-text";
import { AppButton } from "@app/components/button";
import { SubmitButton } from "@app/components/formik/submit-button";
import { Props as ButtonProps } from "@app/components/button/types";
import { Props as SubmitButtonProps } from "@app/components/formik/submit-button/types";
import { FormCheckbox } from "@app/components/formik/form-checkbox";

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

  const hasFormikVal = useMemo(() => {
    return Object.values(formikBag.values).some(
      (val: boolean) => val !== false
    );
  }, [formikBag.values]);

  const customStyles = styles(hasFormikVal);

  const deleteButtonProps: SubmitButtonProps = {
    title: "Delete",
    disabled: hasFormikVal ? false : true,
    containerStyle: customStyles.btnDeleteContainer,
    textStyle: customStyles.txtBtnDelete,
  };

  const cancelButtonProps: ButtonProps = {
    onPress: () => sheetRef.current?.close(),
    title: "Cancel",
    containerStyle: customStyles.btnCancelContainer,
    textStyle: customStyles.txtBtnCancel,
  };

  return (
    <FormikContext.Provider value={formikBag}>
      <RBSheet
        ref={sheetRef}
        closeOnDragDown={true}
        closeOnPressMask={false}
        height={475}
        customStyles={{
          container: customStyles.container,
        }}
      >
        <BaseText style={customStyles.txtDeleteAcc}>Delete Account</BaseText>
        <BaseText style={customStyles.txtDeleteAccPar}>
          We are sad that you want to leave us, but please note that account
          deletion is not irreversable. Please tell us your reason for leaving.
        </BaseText>

        <View style={customStyles.checkBoxContainer}>
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
        <View style={customStyles.buttonContainer}>
          <SubmitButton {...deleteButtonProps} />
          <AppButton {...cancelButtonProps} />
        </View>
      </RBSheet>
    </FormikContext.Provider>
  );
};

export default DeleteAccountModal;
