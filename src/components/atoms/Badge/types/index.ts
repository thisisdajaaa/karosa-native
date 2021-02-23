/**
 *
 * @format
 *
 */

import { ReactNode } from "react";

type Status = "error" | "primary" | "success" | "warning" | undefined;

export type PropsType = {
  value?: ReactNode;
  status?: Status;
};
