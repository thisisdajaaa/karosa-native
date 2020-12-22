import { TextInputProps } from "react-native";

import { Props as InputProps } from "../../input/types";
import { Props as PickerProps } from "../../formik/form-picker/types";

export type Props = {
  label: string;
} & TextInputProps &
  InputProps &
  PickerProps;
