import { TextInputProps } from "react-native";

import { Props as InputProps } from "../../input/types";

export type Props = {
  name?: string;
} & TextInputProps &
  InputProps;
