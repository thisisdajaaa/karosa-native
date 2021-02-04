/**
 *
 * @format
 *
 */
import { StyleProp, ViewStyle } from "react-native";
import { Props as SubmitButtonProps } from "@app/components/formik/submit-button/types";
import { Props as FormInputProps } from "@app/components/formik/form-input/types";
import { Props as HeaderProps } from "@app/components/header/types";

export type LoginForgotHeaderProps = Omit<
  HeaderProps,
  "customStyles" | "title"
>;

export type PropsType = {
  identifierProps?: FormInputProps;
  submitButtonProps?: SubmitButtonProps;
  formikBag?: any;
  customStyles?: StyleProp<ViewStyle>;
  header?: LoginForgotHeaderProps;
};
