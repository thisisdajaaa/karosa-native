import { PickerProps } from "@react-native-picker/picker/typings/Picker";
import { TextInputProps } from "react-native";

export type Data = {
  id: number;
  value: string;
};

export type Props = {
  data: Array<Data>;
  value: string | number;
} & PickerProps &
  TextInputProps;
