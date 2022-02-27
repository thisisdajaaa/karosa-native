/**
 *
 * @format
 *
 */

import { KeyboardTypeOptions } from "react-native";
import { AddressLocation } from "@app/screens/AddressSearch/types";

export type PropsType = {
  routeParams: Readonly<AddressLocation>;
  handleEditAddress: () => void;
  handleBack: () => void;
};

export type ListInputPropsType = {
  variation: number;
  label: string;
  name: string;
  maxLen?: number;
  placeholder: string;
  required?: boolean;
  hasBottomDivider?: boolean;
  keyboardType?: KeyboardTypeOptions;
  numofLines?: number;
};
