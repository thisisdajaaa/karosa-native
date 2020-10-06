import React, { useCallback } from "react";
import { View } from "react-native";
import { useDispatch } from "react-redux";
import { FormikContext, useFormik } from "formik";

import { FormInput } from "../../atoms/formik/form-input";
import { SubmitButton } from "../../atoms/formik/submit-button";
import { BaseText } from "../../atoms/base-text";
import { actions } from "../../../redux/auth";
import { ForgotRequest } from "../../../redux/auth/models";
import { Props as SubmitButtonProps } from "../../atoms/formik/submit-button/types";
import { Props as FormInputProps } from "../../atoms/formik/form-input/types";
import { Header } from "../../header";

import { styles } from "./styles";
import { validationSchema } from "./validation";

const Forgot: React.FC = () => {
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
      <Header iconName={"arrow-back"} txtRight={"Help"} route={"Help"} />
      <View style={styles.container}>
        <BaseText customStyles={styles.txtForgotPass}>
          Forgot Password ?
        </BaseText>
        <BaseText customStyles={styles.txtResetPass}>
          You can reset your password here.
        </BaseText>

        <FormInput {...identifierProps} />
        <SubmitButton {...submitButtonProps} />
      </View>
    </FormikContext.Provider>
  );
};

export default Forgot;
