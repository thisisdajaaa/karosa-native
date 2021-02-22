/**
 *
 * @format
 *
 */

import { ReactElement } from "react";

export type PropsType = {
  children: ReactElement | ReactElement[];
  height: number;
  onOpen?(): void;
  onClose?(): void;
};
