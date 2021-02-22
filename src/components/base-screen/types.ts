import { StyleProp, ViewStyle } from "react-native";

import { Props as HeaderProps } from "../header/types";

export type Props = {
  customStyles?: StyleProp<ViewStyle>;
  subCustomStyles?: StyleProp<ViewStyle>;
  header?: HeaderProps;
  customHeader?: React.ReactElement;
  isLoading?: boolean;
};
