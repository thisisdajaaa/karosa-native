import { PickerProps } from "@react-native-picker/picker/typings/Picker";
import { TextInputProps } from "react-native";
import { PickerData } from "@app/redux/api-models/common";

export type Props = {
  data: Array<PickerData>;
  value?: string | number;
} & PickerProps &
  TextInputProps;
