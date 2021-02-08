/**
 *
 * @format
 *
 */

import { TextInputProps } from "react-native";
import { PickerProps } from "@react-native-picker/picker/typings/Picker";
import { PickerData } from "@app/redux/api-models/common";

export type PropsType = {
  data: PickerData[];
  value?: string | number;
} & PickerProps &
  TextInputProps;
