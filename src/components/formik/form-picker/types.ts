import { TextInputProps } from "react-native";

import { Props as InputProps } from "../../input/types";
import { Props as PickerProps } from "../../picker/types";

export type Props = {
  name: string;
} & TextInputProps &
  InputProps &
  PickerProps;
