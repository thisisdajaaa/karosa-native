/**
 *
 * @format
 *
 */

import { TextInputProps } from "react-native";

import { PropsType as InputProps } from "@app/atoms/Input/types";
import { PropsType as FormPickerProps } from "@app/molecules/FormPicker/types";

export type PropsType = {
  label: string;
} & TextInputProps &
  InputProps &
  FormPickerProps;
