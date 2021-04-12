/**
 *
 * SignUpPassword
 * @format
 *
 */

import React, { useCallback, useEffect, FC } from "react";
import { useDispatch } from "react-redux";
import { FormikContext, useFormik } from "formik";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FormInput } from "@app/components/formik/form-input";
import { SubmitButton } from "@app/components/formik/submit-button";
import { BaseText } from "@app/components/base-text";
import { Screen } from "@app/components/base-screen";
import { Props as ScreenProps } from "@app/components/base-screen/types";
import routes from "@app/navigators/routes";
import { actions, selectors } from "@app/redux/auth";
import { RegisterRequest } from "@app/redux/auth/models";
import { useAuth, useMemoizedSelector } from "@app/hooks";

import type { PropsType } from "./types";
import SignUpPasswordStyles from "./styles";

const SignUpPassword: React.FC<PropsType> = (props: PropsType) => {
  const { submitButtonProps, passwordProps } = props;
  const { goBack, navigate } = useNavigation();

  const dispatch = useDispatch();

  const { values }: any = useRoute().params;
  useEffect(() => {
    console.log(values.identifier);
  }, []);

  const registerResponse = useMemoizedSelector(selectors.getRegisterResponse);

  const callRegisterApi = useCallback(
    (request: RegisterRequest) =>
      dispatch(actions.callRegisterApi.request(request)),
    [dispatch]
  );

  const formikBag = useFormik({
    initialValues: { password: "", phoneDigits: values },
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values) => {
      const request: RegisterRequest = {
        identifier: formikBag.values.phoneDigits,
        password: formikBag.values.password,
      };
      callRegisterApi(request);
      console.log(values);
    },
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
    isLoading: registerResponse.isLoading,
    customStyles: SignUpPasswordStyles.container,
  };

  return (
    <FormikContext.Provider value={formikBag}>
      <Screen {...screenProps}>
        <BaseText customStyles={SignUpPasswordStyles.txtSetPass}>
          Set your Password
        </BaseText>
        <BaseText customStyles={SignUpPasswordStyles.txtResetPass}>
          Password must be 8-16 characters long, and contain one uppercase and
          one lowercase character
        </BaseText>
        <FormInput {...passwordProps} />
        <SubmitButton {...submitButtonProps} />
      </Screen>
    </FormikContext.Provider>
  );
};

export default SignUpPassword;
