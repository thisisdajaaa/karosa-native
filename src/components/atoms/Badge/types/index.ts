/**
 *
 * @format
 *
 */

import { ReactNode } from "react";

export type PropsType = {
  value?: ReactNode;
  status?: "error" | "primary" | "success" | "warning" | undefined;
};
