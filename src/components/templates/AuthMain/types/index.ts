/**
 *
 * @format
 *
 */
import { StyleProp, ViewStyle } from "react-native";
import { Props as HeaderProps } from "@app/components/header/types";

export type AuthMainHeaderProps = Pick<
  HeaderProps,
  "borderBottom" | "text" | "press"
>;

type SubmitButtonProps = {
  title: string;
  loading?: boolean;
};

export type PropsType = {
  onFBLogin: () => void;
  onGoogleLogin: () => void;
  onLogin: () => void;
  header?: AuthMainHeaderProps;
  customStyles?: StyleProp<ViewStyle>;
  signInButtonProps: SubmitButtonProps;
  separatorLabel?: string;
  subDescription?: string;
  signupDesc?: string;
};
