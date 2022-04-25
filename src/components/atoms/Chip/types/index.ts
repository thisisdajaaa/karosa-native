/**
 *
 * @format
 *
 */

import { ReactElement } from "react";

export type PropsType = {
  title: string | ReactElement;
  selected: boolean;
  onPress?(): void;
  iconName?: string;
  iconGroup?: string;
  width?: number;
};
