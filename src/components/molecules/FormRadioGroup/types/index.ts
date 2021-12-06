/**
 *
 * @format
 *
 */

export type Option = {
  id: string;
  label: string;
  info?: string;
};

export type PropsType = {
  name: string;
  options: Option[];
};
