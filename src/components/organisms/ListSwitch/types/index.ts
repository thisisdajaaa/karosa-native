/**
 *
 * @format
 *
 */

import { WithIcon } from "@app/utils";

export type PropsType = {
  name: string;
  title?: string;
  boldTitle?: string;
  info?: string;
  disabled?: boolean;
  icon?: WithIcon;
  hasBottomDivider?: boolean;
};
