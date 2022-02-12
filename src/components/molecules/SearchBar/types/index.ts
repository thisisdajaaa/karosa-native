/**
 *
 * @format
 *
 */

import { GestureResponderEvent } from "react-native";

export type SizeType = "sm" | "md" | "lg";

export type BackgroundColorType = "primary" | "secondary";

export type PropsType = {
  value?: string;
  placeholder?: string;
  autoCorrect?: boolean;
  size?: SizeType;
  autoFocus?: boolean;
  backgroundColor?: BackgroundColorType;
  onChangeText?: (text: string) => void;
  onFocus?(): void;
  onCancel?(): void;
  onTouchStart?: (event: GestureResponderEvent) => void;
};
