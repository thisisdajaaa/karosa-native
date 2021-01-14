/**
 *
 * @format
 *
 */

import { ReactElement } from "react";

export type PropsType = {
  uri: string | null;
  children: ReactElement | ReactElement[];
  onChange(img: string | null): void;
};
