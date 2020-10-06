import React, { useCallback } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { FormikContext, useFormik } from "formik";
import { useNavigation } from "@react-navigation/native";

import { FormInput } from "../../atoms/formik/form-input";
import { SubmitButton } from "../../atoms/formik/submit-button";
import { BaseText } from "../../atoms/base-text";
import { Screen } from "../../atoms/base-screen";
import { actions } from "../../../redux/auth";
import { LoginRequest } from "../../../redux/auth/models";
import { Props as SubmitButtonProps } from "../../atoms/formik/submit-button/types";
import { Props as FormInputProps } from "../../atoms/formik/form-input/types";
import { Props as ScreenProps } from "../../atoms/base-screen/types";
import routes from "../../../navigators/routes";

import { styles } from "./styles";
import { validationSchema } from "./validation";

const Login: React.FC = () => {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();

  const callLoginApi = useCallback(
    (request: LoginRequest) => dispatch(actions.callLoginApi.request(request)),
    [dispatch]
  );

  const handleSubmit = useCallback(() => {
    try {
      const request: LoginRequest = {
        identifier: formikBag.values.identifier,
        password: formikBag.values.password,
      };

      if (!formikBag.dirty) callLoginApi(request);
    } catch (error) {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [callLoginApi]);

  const formikBag = useFormik({
    initialValues: { identifier: "", password: "" },
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: handleSubmit,
    validationSchema,
  });

  const screenProps: ScreenProps = {
    header: {
      iconName: "arrow-back",
      title: "Login",
      press: {
        left: () => navigate(routes.MAIN_AUTH),
      },
    },
    customStyles: styles.container,
  };

  const identifierProps: FormInputProps = {
    name: "identifier",
    placeholder: "Phone number / Username / Email",
  };

  const passwordProps: FormInputProps = {
    name: "password",
    placeholder: "Password",
  };

  const loginButtonProps: SubmitButtonProps = {
    title: "Login",
    margin: 6,
  };

  return (
    <FormikContext.Provider value={formikBag}>
      <Screen {...screenProps}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../../../../assets/logo-red.png")}
          />
        </View>

        <FormInput {...identifierProps} />
        <FormInput {...passwordProps} />
        <SubmitButton {...loginButtonProps} />

        <TouchableOpacity onPress={() => navigate(routes.FORGOT)}>
          <BaseText customStyles={styles.txtForgotPass}>
            I forgot my password
          </BaseText>
        </TouchableOpacity>
      </Screen>
    </FormikContext.Provider>
  );
};

export default Login;
