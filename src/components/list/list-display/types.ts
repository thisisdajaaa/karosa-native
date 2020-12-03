import { StyleProp, TextStyle, ViewStyle } from "react-native";

type Style = {
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

type Text = {
  left: string;
  right: string;
};
type Address = {
  name: string;
  phoneNumber: string;
  barangayId: number;
  detailed_Address: string;
  default: boolean;
};

export type Props = {
  style?: Style;
  text: Text;
};

export type AddressProps = {
  style?: Style;
  address: Address;
};
