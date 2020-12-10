import React, { useImperativeHandle, useState } from "react";

import { BottomDialogProps } from "./types";
import RBSheet from "react-native-raw-bottom-sheet";
import { Dimensions } from "react-native";
import { View } from "react-native";
import { useRef } from "react";

export const BottomDialog: React.FC<BottomDialogProps> = ({ listener }) => {
  const [isShow, setShow] = useState(false);
  const sheetRef = useRef<RBSheet>(null);
  const [currentComponent, setComponenet] = useState<React.ReactElement>();

  useImperativeHandle(listener, () => ({
    open: (component) => {
        setShow(true)
        setComponenet(component);
        setTimeout(() => {
          sheetRef.current?.open()
        }, 50);
    },
    close: () => {
      sheetRef.current?.close()
    },
  }))

  return (
    <View>
      {isShow && <RBSheet
        ref={sheetRef}
        closeOnDragDown={true}
        closeOnPressMask={false}
        onClose={() => {
          setShow(false)
        }}
        height={Dimensions.get("window").height * 0.9}
        customStyles={{
          container: {
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            padding: 5,
            alignItems: "center",
          },
        }}
      >
        {currentComponent}
      </RBSheet>}
    </View>

  );
};
