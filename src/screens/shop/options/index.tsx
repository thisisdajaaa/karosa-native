import React from "react";
import { View } from "react-native";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { BottomSheet } from "@app/components/bottom-sheet";
import { BaseText } from "@app/components/base-text";
import { ListIterator } from "@app/components/list/list-iterator";
import { ListAction } from "@app/components/list/list-action";
import { Separator } from "@app/components/separator";
import { MODAL_SIZE } from "@app/constants";

import { Props, Options } from "./types";
import { styles } from "./styles";

const ShopOptionsModal: React.FC<Props> = ({ sheetRef }) => {
  const icons = (options: Options) => {
    if (options === "Share") {
      return <Entypo name="share" style={styles.optionIcon} />;
    } else if (options === "Report") {
      return (
        <MaterialCommunityIcons
          name="message-alert"
          style={styles.optionIcon}
        />
      );
    } else if (options === "Block") {
      return (
        <MaterialCommunityIcons name="block-helper" style={styles.optionIcon} />
      );
    }
  };

  const listAction = (label: string, options: Options): JSX.Element => {
    return (
      <ListAction
        style={{ containerStyle: styles.actionContainer }}
        onClick={() => sheetRef.current?.close()}
        text={{ left: label }}
        structure={{
          LeftComponent: (
            <React.Fragment>
              <View style={styles.itemContainer}>
                {icons(options)}
                <BaseText style={styles.txtLabel}>{label}</BaseText>
              </View>
              <Separator containerStyle={styles.separator} />
            </React.Fragment>
          ),
        }}
      />
    );
  };

  const listDisplay = (): React.ReactElement[] => {
    const elements: React.ReactElement[] = [];

    elements.push(listAction("Share", "Share"));
    elements.push(listAction("Report Shop", "Report"));
    elements.push(listAction("Block Shop", "Block"));

    return ListIterator(elements);
  };

  return (
    <BottomSheet height={MODAL_SIZE.OPTIONS_MODAL} ref={sheetRef}>
      <View style={styles.spacer} />
      <React.Fragment>{listDisplay()}</React.Fragment>
    </BottomSheet>
  );
};

export default ShopOptionsModal;
