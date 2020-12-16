import React from "react";
import { ListItem } from "react-native-elements";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { BaseText } from "../../base-text";

import { BaseProps } from "./types";
import { styles } from "./styles";

export const ListChevron: React.FC<BaseProps> = ({
  title,
  txtInfo,
  listColor,
  required,
  onPress,
  hasBottomDivider,
  iconStyle,
  txtInfoStyle,
}) => {
  return (
    <ListItem bottomDivider={hasBottomDivider}>
      <ListItem.Content style={styles.container}>
        {listColor && (
          <MaterialCommunityIcons
            style={styles.listColor}
            name="checkbox-blank"
            color={listColor}
          />
        )}
        <BaseText style={[listColor ? styles.hasListColor : styles.title]}>
          {title}
        </BaseText>
        {required && <BaseText style={styles.required}>*</BaseText>}
      </ListItem.Content>
      {txtInfo && (
        <BaseText style={[styles.txtInfo, txtInfoStyle]}>{txtInfo}</BaseText>
      )}
      <ListItem.Chevron onPress={onPress} iconStyle={iconStyle} />
    </ListItem>
  );
};
