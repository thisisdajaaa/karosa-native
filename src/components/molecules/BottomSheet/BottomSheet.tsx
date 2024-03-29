/**
 *
 * BottomSheet
 * @format
 *
 */

import React, { forwardRef, Ref } from "react";
import RBSheet from "react-native-raw-bottom-sheet";

import type { PropsType } from "./types";
import BottomSheetStyles from "./styles";

const BottomSheet = forwardRef((props: PropsType, ref: Ref<RBSheet>) => {
  const { children, height, onClose, onOpen } = props;

  return (
    <RBSheet
      ref={ref}
      height={height}
      onOpen={onOpen}
      onClose={onClose}
      closeOnDragDown={true}
      closeOnPressMask={false}
      customStyles={{ container: BottomSheetStyles.container }}
    >
      {children}
    </RBSheet>
  );
});

export default BottomSheet;
