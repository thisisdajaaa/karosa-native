/**
 *
 * @format
 *
 */
import { Props as ListAvatarProps } from "@app/components/list/list-avatar/types";
import { StyleProp, ViewStyle } from "react-native";
import type { LOGIN_HEADER_PROPS as AuthHelpProps } from "@app/constants";

export type PropsType = {
  emailProps?: ListAvatarProps;
  phoneProps?: ListAvatarProps;
  customStyles?: StyleProp<ViewStyle>;
  header?: AuthHelpProps;
};
