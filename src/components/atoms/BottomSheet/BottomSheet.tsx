/**
 *
 * BottomSheet2
 * @format
 *
 */

import React from "react";
import RBSheet from "react-native-raw-bottom-sheet";

import { Props } from "./types";

const BottomSheet = React.forwardRef(
  ({ height, children }: Props, ref: React.Ref<RBSheet>) => {
    return (
      <RBSheet
        ref={ref}
        closeOnDragDown={true}
        closeOnPressMask={false}
        height={height}
        customStyles={{
          container: {
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            padding: 5,
          },
        }}>
        {children}
      </RBSheet>
    );
  }
);

export default BottomSheet;
