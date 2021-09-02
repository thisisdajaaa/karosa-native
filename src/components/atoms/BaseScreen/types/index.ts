import { BaseHeader } from "@app/molecules/Header";
/**
 *
 * @format
 *
 */

import { StyleProp, ViewStyle } from "react-native";

import { Props as HeaderProps } from "../../BaseHeader/types";

export type Props = {
  customStyles?: StyleProp<ViewStyle>;
  header?: HeaderProps;
  customHeader?: React.ReactElement;
  isLoading?: boolean;
};
