/**
 *
 * @format
 *
 */

export type TrackColorType = {
  false: string;
  true: string;
};

export type PropsType = {
  value: boolean;
  disabled?: boolean;
  onChange(value: boolean): void;
};
