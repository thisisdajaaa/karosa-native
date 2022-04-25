/**
 *
 * @format
 *
 */

import { RefObject } from "react";
import RBSheet from "react-native-raw-bottom-sheet";

export type PropsType = { sheetRef: RefObject<RBSheet> };

export type VariantImageProps = {
  selected: boolean;
  item: string;
  onPress: () => void;
};
