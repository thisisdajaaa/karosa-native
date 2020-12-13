import { GestureResponderEvent } from "react-native";

type BackgroundColor = "primary" | "secondary";

export type Props = {
  width?: number;
  placeholder: string;
  backgroundColor?: BackgroundColor;
  onTouchStart?: ((event: GestureResponderEvent) => void) | undefined;
  onFocus?: () => void;
  searchVal?: string;
};
