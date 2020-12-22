import { TextInputProps } from "react-native";

import { Props as InputProps } from "../../input/types";

export type SelectionData = {
  id: number;
  value: string;
};

export type Props = {
  name: string;
  data: Array<SelectionData>;
} & TextInputProps &
  InputProps;
