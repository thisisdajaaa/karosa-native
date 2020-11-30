import React from "react";
import { View } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import { CheckBox } from "react-native-elements";
import { theme } from "@app/styles";
import { BaseText } from "@app/components/base-text";
import { Separator } from "@app/components/separator";
import { AppButton } from "@app/components/button";
import { Props as ButtonProps } from "@app/components/button/types";

import { Props } from "./types";
import { styles } from "./styles";

const AvailabilityModal: React.FC<Props> = ({ sheetRef }) => {
  const doneButtonProps: ButtonProps = {
    onPress: () => sheetRef.current?.close(),
    title: "Done",
    containerStyle: styles.doneButtonContainer,
    textStyle: styles.txtDone,
  };

  return (
    <RBSheet
      ref={sheetRef}
      closeOnDragDown={true}
      closeOnPressMask={false}
      height={527}
      customStyles={{
        container: {
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          padding: 5,
        },
      }}
    >
      <BaseText style={styles.txtProductStatus}>Available every</BaseText>
      <View style={styles.spacer} />
      <CheckBox
        checked={true}
        title={"Monday"}
        onPress={() => console.log("pressed")}
        checkedColor={theme.colors.primary}
        containerStyle={{
          backgroundColor: "transparent",
          borderWidth: 0,
          margin: 0,
        }}
      />
      <Separator containerStyle={styles.separator} />
      <CheckBox
        checked={true}
        title={"Tuesday"}
        onPress={() => console.log("pressed")}
        checkedColor={theme.colors.primary}
        containerStyle={{
          backgroundColor: "transparent",
          borderWidth: 0,
          margin: 0,
        }}
      />
      <Separator containerStyle={styles.separator} />
      <CheckBox
        checked={true}
        title={"Wednesday"}
        onPress={() => console.log("pressed")}
        checkedColor={theme.colors.primary}
        containerStyle={{
          backgroundColor: "transparent",
          borderWidth: 0,
          margin: 0,
        }}
      />
      <Separator containerStyle={styles.separator} />
      <CheckBox
        checked={true}
        title={"Thursday"}
        onPress={() => console.log("pressed")}
        checkedColor={theme.colors.primary}
        containerStyle={{
          backgroundColor: "transparent",
          borderWidth: 0,
          margin: 0,
        }}
      />
      <Separator containerStyle={styles.separator} />
      <CheckBox
        checked={true}
        title={"Friday"}
        onPress={() => console.log("pressed")}
        checkedColor={theme.colors.primary}
        containerStyle={{
          backgroundColor: "transparent",
          borderWidth: 0,
          margin: 0,
        }}
      />
      <Separator containerStyle={styles.separator} />
      <CheckBox
        checked={true}
        title={"Saturday"}
        onPress={() => console.log("pressed")}
        checkedColor={theme.colors.primary}
        containerStyle={{
          backgroundColor: "transparent",
          borderWidth: 0,
          margin: 0,
        }}
      />
      <Separator containerStyle={styles.separator} />
      <CheckBox
        checked={true}
        title={"Sunday"}
        onPress={() => console.log("pressed")}
        checkedColor={theme.colors.primary}
        containerStyle={{
          backgroundColor: "transparent",
          borderWidth: 0,
          margin: 0,
        }}
      />
      <Separator containerStyle={styles.separator} />

      <View style={{ marginTop: 12, alignSelf: "center" }}>
        <AppButton {...doneButtonProps} />
      </View>
    </RBSheet>
  );
};

export default AvailabilityModal;
