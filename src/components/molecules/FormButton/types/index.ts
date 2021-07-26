/**
 *
 * @format
 *
 */

/**
 * Don't use this prop instead Use the type from atoms/Button/types.
 */
import { StyleProp, ViewStyle } from "react-native";

export type PropsType = {
  title: string;
  loading?: boolean;
  buttonStyle?: StyleProp<ViewStyle>;
};
