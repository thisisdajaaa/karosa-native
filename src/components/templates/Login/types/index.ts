/**
 *
 * @format
 *
 */
import { StyleProp, ViewStyle } from "react-native";
import { Props as SubmitButtonProps } from "@app/components/formik/submit-button/types";
import { Props as FormInputProps } from "@app/components/formik/form-input/types";
import type { LOGIN_HEADER_PROPS as LoginProps } from "@app/constants";

export type PropsType = {
  onPress?: () => void;
  loginButtonProps?: SubmitButtonProps;
  passwordProps?: FormInputProps;
  identifierProps?: FormInputProps;
  formikBag?: any;
  description?: string;
  customStyles?: StyleProp<ViewStyle>;
  isLoading?: boolean;
  header?: LoginProps;
};
