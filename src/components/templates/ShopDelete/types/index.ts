/**
 *
 * @format
 *
 */

import { RefObject } from "react";
import RBSheet from "react-native-raw-bottom-sheet";

export type PropsType = {
  sheetRef: RefObject<RBSheet>;
  onDelete(): void;
};
