import React, { useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { FormikContext, useFormik } from "formik";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FormPassword } from "@app/components/molecules/FormInputPassword";
import { SubmitButton } from "@app/components/formik/submit-button";
import { BaseText } from "@app/components/base-text";
import { Screen } from "@app/components/base-screen";
import { Props as SubmitButtonProps } from "@app/components/formik/submit-button/types";
import { Props as FormPasswordProps } from "@app/components/molecules/FormInputPassword/types";
import { Props as ScreenProps } from "@app/components/base-screen/types";
import routes from "@app/navigators/routes";

import { styles } from "./styles";
import { validationSchema } from "./validation";

const VerificationScreen: React.FC = () => {
  const { goBack, navigate } = useNavigation();
  const { values }: any = useRoute().params;

  const formikBag = useFormik({
    initialValues: { otp: "12" },
    validateOnChange: true,
    onSubmit: (values) => {
      navigate("Stack", { screen: routes.AUTH_PASSWORD, params: { values } });
      console.log(values.otp);
    },
    validationSchema,
  });

  useEffect(() => {
    console.log(values.identifier);
    console.log(formikBag.errors.otp);
  }, [formikBag]);

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

  const submitButtonProps: SubmitButtonProps = {
    title: "Next",
    margin: 6,
  };

  const otpProps: FormPasswordProps = {
    name: "otp",
    inputLength: 6,
    style: styles.container,
  };

  return (
    <FormikContext.Provider value={formikBag}>
      <Screen {...screenProps}>
        <BaseText customStyles={styles.txtVerificationCode}>
          Enter verification code:
        </BaseText>
        <BaseText style={styles.txtSMS}>
          You verification code is sent by SMS to: {values.identifier}
        </BaseText>
        <FormPassword {...otpProps} />
        <SubmitButton {...submitButtonProps} />
        <BaseText style={styles.txtSMS}>
          Did not receive the code?
          <TouchableOpacity
            style={styles.txtResend}
            onPress={() => console.log("Resend")}>
            <BaseText>Resend</BaseText>
          </TouchableOpacity>
        </BaseText>
      </Screen>
    </FormikContext.Provider>
  );
};

export default VerificationScreen;
