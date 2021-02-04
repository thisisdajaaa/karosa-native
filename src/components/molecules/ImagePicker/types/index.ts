/**
 *
 * @format
 *
 */

export type PropsType = {
  variation: number;
  uri: string | null;
  onChange(img: string | null): void;
};

export type VariationType = {
  uri: string | null;
};
