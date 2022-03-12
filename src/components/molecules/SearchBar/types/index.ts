/**
 *
 * @format
 *
 */

import { GestureResponderEvent } from "react-native";
import { ChangeText } from "@app/utils";

export type SizeType = "sm" | "md" | "lg";

export type BackgroundColorType = "primary" | "secondary";

export type PropsType = {
  value?: string;
  placeholder?: string;
  autoCorrect?: boolean;
  size?: SizeType;
  autoFocus?: boolean;
  backgroundColor?: BackgroundColorType;
  onChangeText?: ChangeText;
  onFocus?(): void;
  onCancel?(): void;
  onTouchStart?: (event: GestureResponderEvent) => void;
};
