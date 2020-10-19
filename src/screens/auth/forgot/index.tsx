import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { FormikContext, useFormik } from "formik";
import { useNavigation } from "@react-navigation/native";
import { FormInput } from "@app/components/formik/form-input";
import { SubmitButton } from "@app/components/formik/submit-button";
import { BaseText } from "@app/components/base-text";
import { Screen } from "@app/components/base-screen";
import { Props as SubmitButtonProps } from "@app/components/formik/submit-button/types";
import { Props as FormInputProps } from "@app/components/formik/form-input/types";
import { Props as ScreenProps } from "@app/components/base-screen/types";
import { actions } from "@app/redux/auth";
import { ForgotRequest } from "@app/redux/auth/models";
import routes from "@app/navigators/routes";

import { styles } from "./styles";
import { validationSchema } from "./validation";

const ForgotScreen: React.FC = () => {
  const { goBack, navigate } = useNavigation();
  const dispatch = useDispatch();

  const callForgotApi = useCallback(
    (request: ForgotRequest) =>
      dispatch(actions.callForgotApi.request(request)),
    [dispatch]
  );

  const handleSubmit = useCallback(() => {
    try {
      const request: ForgotRequest = {
        identifier: formikBag.values.identifier,
      };

      if (!formikBag.dirty) callForgotApi(request);
    } catch (error) {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [callForgotApi]);

  const formikBag = useFormik({
    initialValues: { identifier: "" },
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: handleSubmit,
    validationSchema,
  });

  const screenProps: ScreenProps = {
    header: {
      iconName: "arrow-back",
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

  const identifierProps: FormInputProps = {
    name: "identifier",
    placeholder: "Email / Phone",
  };

  const submitButtonProps: SubmitButtonProps = {
    title: "Submit",
    margin: 6,
  };

  return (
    <FormikContext.Provider value={formikBag}>
      <Screen {...screenProps}>
        <BaseText customStyles={styles.txtForgotPass}>
          Forgot Password ?
        </BaseText>
        <BaseText customStyles={styles.txtResetPass}>
          You can reset your password here.
        </BaseText>

        <FormInput {...identifierProps} />
        <SubmitButton {...submitButtonProps} />
      </Screen>
    </FormikContext.Provider>
  );
};

export default ForgotScreen;
