/**
 *
 * @format
 *
 */

<<<<<<< HEAD
 import { StyleProp, ViewStyle } from "react-native";
 import { IconNode } from "react-native-elements/dist/icons/Icon";
 
 export type PropsType = {
   onPress(): void;
   id?: number;
   title: string;
   icon?: IconNode | undefined;
   buttonStyle?: StyleProp<ViewStyle>;
   titleStyle?: StyleProp<any>;
   containerStyle?: StyleProp<any>;
 };
=======
import { StyleProp, ViewStyle } from "react-native";
import { IconNode } from "react-native-elements/dist/icons/Icon";

export type PropsType = {
  onPress(): void;
  id?: number;
  title: string;
  icon?: IconNode | undefined;
  buttonStyle?: StyleProp<ViewStyle>;
};
>>>>>>> a331fff... feat(productdetail modal): added some coding to highlight the variations selected
