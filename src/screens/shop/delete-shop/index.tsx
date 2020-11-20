import React, { useMemo } from "react";
import RBSheet from "react-native-raw-bottom-sheet";
import { FormikContext, useFormik } from "formik";
import { View } from "react-native";
import { BaseText } from "@app/components/base-text";
import { AppButton } from "@app/components/button";
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
          container: {
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            padding: 5,
            alignItems: "center",
          },
        }}
      >
        <BaseText style={customStyles.txtDeleteShop}>Delete Shop</BaseText>
        <BaseText style={customStyles.txtDeleteShopPar}>
          We are sad that you don't want to be a seller anymore, but please note
          that shop deletion is not irreversable. Shop settings and products
          will be deleted as well.
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
        </View>
        <View style={customStyles.buttonContainer}>
          <SubmitButton {...deleteButtonProps} />
          <AppButton {...cancelButtonProps} />
        </View>
      </RBSheet>
    </FormikContext.Provider>
  );
};

export default DeleteShopModal;
