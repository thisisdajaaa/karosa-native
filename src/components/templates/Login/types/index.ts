/**
 *
 * @format
 *
 */
import { StyleProp, ViewStyle } from "react-native";
import type { LOGIN_HEADER_PROPS as LoginProps } from "@app/constants";

type SubmitButtonProps = {
  title: string;
  loading?: boolean;
};

export type PropsType = {
  onPress?: () => void;
  loginButtonProps: SubmitButtonProps;
  identifierName: string;
  identifierPlaceholder: string;
  passwordName: string;
  passwordPlaceholder: string;
  formikBag?: any;
  description: string;
  customStyles?: StyleProp<ViewStyle>;
  isLoading?: boolean;
  header?: LoginProps;
};
