export type Options = {
  id: string;
  label: string;
};

export type Props = {
  name: string;
  options: Options[];
  hasSeparator?: boolean;
};
