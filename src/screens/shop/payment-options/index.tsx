import React, { useMemo } from "react";
import { FormikContext, useFormik } from "formik";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FormSwitch } from "@app/components/formik/form-switch";
import { Screen } from "@app/components/base-screen";
import { MultiList } from "@app/components/multi-list";
import { SubmitButton } from "@app/components/formik/submit-button";
import { Props as MultiListProps } from "@app/components/multi-list/types";
import { Props as ScreenProps } from "@app/components/base-screen/types";
import { Props as SubmitButtonProps } from "@app/components/formik/submit-button/types";

import { styles } from "./styles";

const PaymentOptionsScreen: React.FC = () => {
  const { goBack } = useNavigation();

  const multiListProps: MultiListProps = {
    multiAction: [
      {
        text: { left: "Cash on Delivery" },
        RightComponent: <FormSwitch name={"cod"} />,
        hasSeparator: true,
      },
      {
        text: { left: "GCash" },
        RightComponent: <FormSwitch name={"gcash"} />,
        hasSeparator: true,
      },
      {
        text: { left: "Credit Card" },
        RightComponent: <FormSwitch name={"cc"} />,
      },
    ],
  };

  const formikBag = useFormik({
    initialValues: { cod: false, gcash: false, cc: false },
    onSubmit: () => console.log("submit form"),
  });

  const hasFormikVal = useMemo(() => {
    return Object.values(formikBag.values).some(
      (val: boolean) => val !== false
    );
  }, [formikBag.values]);

  const customStyles = styles(hasFormikVal);

  const saveButtonProps: SubmitButtonProps = {
    title: "Save",
    containerStyle: customStyles.btnSaveContainer,
    textStyle: customStyles.txtBtnSave,
  };

  const screenProps: ScreenProps = {
    header: {
      iconName: "arrow-back",
      title: "Payment Options",
      press: {
        left: () => goBack(),
      },
    },
    customStyles: customStyles.container,
  };

  return (
    <Screen {...screenProps}>
      <FormikContext.Provider value={formikBag}>
        <MultiList {...multiListProps} />

        <View style={customStyles.buttonContainer}>
          <SubmitButton {...saveButtonProps} />
        </View>
      </FormikContext.Provider>
    </Screen>
  );
};

export default PaymentOptionsScreen;
