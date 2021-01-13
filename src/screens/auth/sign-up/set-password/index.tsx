import React from "react";
import { FormikContext, useFormik } from "formik";
import { useNavigation } from "@react-navigation/native";
import { FormInput } from "@app/components/formik/form-input";
import { SubmitButton } from "@app/components/formik/submit-button";
import { BaseText } from "@app/components/base-text";
import { Screen } from "@app/components/base-screen";
import { Props as SubmitButtonProps } from "@app/components/formik/submit-button/types";
import { Props as FormInputProps } from "@app/components/formik/form-input/types";
import { Props as ScreenProps } from "@app/components/base-screen/types";
import routes from "@app/navigators/routes";

import { styles } from "./styles";
import { validationSchema } from "./validation";

const PasswordScreen: React.FC = () => {
  const { goBack, navigate } = useNavigation();

  const formikBag = useFormik({
    initialValues: { password: "" },
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema,
  });

  const screenProps: ScreenProps = {
    header: {
      iconName: "arrow-back",
      borderBottom: false,
      title: "Sign up",
      text: {
        right: "Help",
      },
      press: {
        left: () => goBack(),
        right: () => navigate(routes.AUTH_HELP),
      },
    },
    customStyles: styles.container,
  };

  const passwordProps: FormInputProps = {
    name: "password",
    placeholder: "Password",
    textContentType: "password",
    secureTextEntry: true,
  };

  const submitButtonProps: SubmitButtonProps = {
    title: "Next",
    margin: 6,
  };

  return (
    <FormikContext.Provider value={formikBag}>
      <Screen {...screenProps}>
        <BaseText customStyles={styles.txtSetPass}>
          Set your Password
        </BaseText>
        <BaseText customStyles={styles.txtResetPass}>
          Password must be 8-16 characters long, and contain one uppercase and
          one lowercase character
        </BaseText>
        <FormInput {...passwordProps} />
        <SubmitButton {...submitButtonProps} />
      </Screen>
    </FormikContext.Provider>
  );
};

export default PasswordScreen;
