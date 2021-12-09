import { StyleProp, ViewStyle } from "react-native";

import { PropsType as HeaderProps } from "../Header/types";
export type Props = {
  customStyles?: StyleProp<ViewStyle>;
  subCustomStyles?: StyleProp<ViewStyle>;
  header?: HeaderProps;
  customHeader?: React.ReactElement;
  isLoading?: boolean;
};
