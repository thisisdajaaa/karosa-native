import { TextInputProps } from "react-native";

export type Data = {
  id: number;
  value: string;
};

export type Props = {
  data: Array<Data>;
} & TextInputProps;
