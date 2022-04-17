/**
 *
 * @format
 *
 */

import {
  NativeSyntheticEvent,
  StyleProp,
  TextLayoutEventData,
  TextStyle,
} from "react-native";

type EllipsizeMode = "head" | "middle" | "tail" | "clip";

export type PropsType = {
  text: string;
  textStyle?: StyleProp<TextStyle>;
  numberOfLines?: number;
  ellipsizeMode?: EllipsizeMode;
  onPress?: () => void;
  onTextLayout?: (event: NativeSyntheticEvent<TextLayoutEventData>) => void;
};
