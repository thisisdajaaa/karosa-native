/**
 *
 * @format
 *
 */

import { WithIcon } from "@app/utils";

type Icon = "green" | "gray" | "gold" | string;

export type PropsType = {
  label: string;
  value: string;
  hasBottomDivider?: boolean;
  color: Icon;
  required?: boolean;
  onPress(): void;
  icon?: WithIcon;
};
