/**
 *
 * @format
 *
 */

import { StyleProp, ViewStyle } from "react-native";
import { IconNode } from "react-native-elements/dist/icons/Icon";

export type PropsType = {
  onPress(): void;
  id?: number;
  title: string;
  icon?: IconNode | undefined;
  buttonStyle?: StyleProp<ViewStyle>;
<<<<<<< HEAD
<<<<<<< HEAD
  titleStyle?: StyleProp<any>;
  containerStyle?: StyleProp<any>;
=======
>>>>>>> a331fff... feat(productdetail modal): added some coding to highlight the variations selected
=======
  titleStyle?: StyleProp<any>;
  containerStyle?: StyleProp<any>;
>>>>>>> 3018a6a... style(product details of image layout and buttons): image layout changes and buttons
};
