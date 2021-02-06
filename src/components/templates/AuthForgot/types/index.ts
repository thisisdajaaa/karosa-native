/**
 *
 * @format
 *
 */
import { StyleProp, ViewStyle } from "react-native";
import { Props as HeaderProps } from "@app/components/header/types";

export type LoginForgotHeaderProps = Omit<
  HeaderProps,
  "customStyles" | "title"
>;

export type PropsType = {
  formikBag?: any;
  customStyles?: StyleProp<ViewStyle>;
  header?: LoginForgotHeaderProps;
  forgotDesc: string;
  resetDesc: string;
  submitButtonTitle?: string;
  identifierName?: string;
  identifierPlaceholder?: string;
};
