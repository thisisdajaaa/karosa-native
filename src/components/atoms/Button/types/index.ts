/* eslint-disable @typescript-eslint/ban-types */
/**
 *
 * @format
 *
 */

import { StyleProp, TextStyle, ViewStyle } from "react-native";
import { IconNode } from "react-native-elements/dist/icons/Icon";

type ButtonType = "solid" | "clear" | "outline";

export type PropsType = {
  title:
    | string
    | React.ReactElement<{}, string | React.JSXElementConstructor<any>>
    | undefined;
  onPress?(): void;
  type?: ButtonType;
  loading?: boolean;
  disabled?: boolean;
  titleStyle?: StyleProp<TextStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  icon?: IconNode;
};
