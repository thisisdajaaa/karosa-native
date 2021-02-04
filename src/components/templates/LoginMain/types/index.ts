/**
 *
 * @format
 *
 */
import { StyleProp, ViewStyle } from "react-native";
import { Props as HeaderProps } from "@app/components/header/types";
import { Props as ButtonProps } from "@app/components/button/types";

export type LoginMainHeaderProps = Pick<
  HeaderProps,
  "borderBottom" | "text" | "press"
>;

export type PropsType = {
  onFBLogin?: () => void;
  onGoogleLogin?: () => void;
  onLogin?: () => void;
  header?: LoginMainHeaderProps;
  customStyles?: StyleProp<ViewStyle>;
  fbButtonProps?: ButtonProps;
  gmailButtonProps?: ButtonProps;
  signInButtonProps?: ButtonProps;
};
