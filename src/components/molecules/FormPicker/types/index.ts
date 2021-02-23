/**
 *
 * @format
 *
 */

import { TextInputProps } from "react-native";
import { PropsType as InputProps } from "@app/atoms/Input/types";
import { PropsType as PickerProps } from "@app/molecules/Picker/types";

type OmittedValue = "value" | "onChange";

export type PropsType = {
  name: string;
} & TextInputProps &
  Omit<InputProps, OmittedValue> &
  PickerProps;
