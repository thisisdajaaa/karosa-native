/**
 *
 * @format
 *
 */

import { ReactElement } from "react";

export type PropsType = {
  label: string | ReactElement;
  name: string;
  uncheckedColor?: string;
  onCheck?(): void;
};
