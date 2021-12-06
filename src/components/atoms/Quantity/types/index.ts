/**
 *
 * @format
 *
 */

export type PropsType = {
  onDecrement(): void;
  onIncrement(): void;
  disableIncrement?: boolean;
  disableDecrement?: boolean;
  value: string;
};
