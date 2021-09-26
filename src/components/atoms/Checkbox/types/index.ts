/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 *
 * @format
 *
 */

import { ReactElement } from "react";

export type PropsType = {
  value: boolean;
  label: string | ReactElement<any, any>;
  uncheckedColor?: string;
  onPress(): void;
};
