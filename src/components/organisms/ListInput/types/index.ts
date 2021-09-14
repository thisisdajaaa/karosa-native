/**
 *
 * @format
 *
 */

import { WithIcon } from "@app/utils";
import { KeyboardTypeOptions } from "react-native";

export type PropsType = {
  variation: number;
  label: string;
  name: string;
  maxLen?: number;
  placeholder: string;
  required?: boolean;
  hasBottomDivider?: boolean;
  keyboardType?: KeyboardTypeOptions;
  info?: string;
  icon?: WithIcon;
};
