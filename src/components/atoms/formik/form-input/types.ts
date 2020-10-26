import { TextInputProps } from "react-native";

import { Props as InputProps } from "../../input/types";


type SelectionData = {
  id: number;
  value: String;
};

export type Props = {
  name: string;
} & TextInputProps &
  InputProps;

export type IonSelectionProps = {
  name: string;
  data: Array<SelectionData>;
} & TextInputProps &
  InputProps;
  
