/**
 *
 * @format
 *
 */

import type { PropsType as QuantityProps } from "@app/atoms/Quantity/types";

export type PropsType = Omit<
  QuantityProps,
  "value" | "onDecrement" | "onIncrement"
> & {
  name: string;
  onDecrement?(): void;
  onIncrement?(): void;
};
