/**
 *
 * @format
 *
 */

export type VariationType = {
  uri: string | null;
};

export type PropsType = {
  variation: number;
  uri: string | null;
  onChange(img: string | null): void;
};
