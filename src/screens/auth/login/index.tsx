import React, { useEffect, useCallback } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { FormikContext, useFormik } from "formik";
import { useNavigation } from "@react-navigation/native";
import { FormInput } from "@app/components/formik/form-input";
import { SubmitButton } from "@app/components/formik/submit-button";
import { BaseText } from "@app/components/base-text";
import { Screen } from "@app/components/base-screen";
import { actions, selectors } from "@app/redux/auth";
import { useAuth, useMemoizedSelector } from "@app/hooks";
import { LoginRequest } from "@app/redux/auth/models";
import { Props as ScreenProps } from "@app/components/base-screen/types";
import { Props as SubmitButtonProps } from "@app/components/formik/submit-button/types";
import { Props as FormInputProps } from "@app/components/formik/form-input/types";
import routes from "@app/navigators/routes";

import { styles } from "./styles";
import { validationSchema } from "./validation";

const LoginScreen: React.FC = () => {
  const { navigate } = useNavigation();
  const { isLoggedIn } = useAuth();
  const dispatch = useDispatch();

  const callLoginApi = useCallback(
    (request: LoginRequest) => dispatch(actions.callLoginApi.request(request)),
    [dispatch]
  );

  useEffect(() => {
    if (isLoggedIn) navigate("Home", { screen: routes.ACCOUNTS_MAIN });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  const loginResponse = useMemoizedSelector(selectors.getLoginResponse);

  const formikBag = useFormik({
    initialValues: { identifier: "", password: "" },
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values) => {
      const request: LoginRequest = {
        identifier: values.identifier,
        password: values.password,
      };

      callLoginApi(request);
    },
    validationSchema,
  });

  const screenProps: ScreenProps = {
    header: {
      iconName: "arrow-back",
      title: "Login",
      borderBottom: false,
      press: {
        left: () => navigate(routes.AUTH_MAIN),
      },
    },
    isLoading: loginResponse.isLoading,
    customStyles: styles.container,
  };

  const identifierProps: FormInputProps = {
    name: "identifier",
    placeholder: "Phone number / Username / Email",
    textContentType: "username" || "telephoneNumber",
  };

  const passwordProps: FormInputProps = {
    name: "password",
    placeholder: "Password",
    textContentType: "password",
    secureTextEntry: true,
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

        <TouchableOpacity onPress={() => navigate(routes.AUTH_FORGOT)}>
          <BaseText customStyles={styles.txtForgotPass}>
            I forgot my password
          </BaseText>
        </TouchableOpacity>
      </Screen>
    </FormikContext.Provider>
  );
};

export default LoginScreen;
