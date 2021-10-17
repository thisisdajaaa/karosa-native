/**
 *
 * @format
 *
 */

import {
  ImageSourcePropType,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";
// import { Status } from "@app/atoms/Badge/types";

export type PropsType = {};

export type CardPropsType = {
  storeName: string;
  productName: string;
  quantity: number;
  total: number;
  actionItem: "confirmation" | "ship" | "receive" | "completed" | "cancelled";
  imageUrl: ImageSourcePropType;
};

export type BtnGrpContentType = {
  text: string;
  value?: string;
  textStyle?: StyleProp<TextStyle>;
  // badgeStatus?: Status;
  badgeContainerStyle?: StyleProp<ViewStyle>;
  mainContainerStyle?: StyleProp<ViewStyle>;
  badgeStyle?: StyleProp<ViewStyle>;
  isActive: boolean;
};
