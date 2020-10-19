import { StyleProp, ViewStyle } from "react-native";

import { Props as HeaderProps } from "../header/types";

export type Props = {
  customStyles?: StyleProp<ViewStyle>;
  header?: HeaderProps;
  isLoading?: boolean;
};
