import React from "react";
import { TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { ListItem } from "react-native-elements";
import { BaseText } from "@app/components/base-text";

import { Props } from "./types";
import { styles } from "./styles";

export const ListStatus: React.FC<Props> = React.memo(
  ({ title, hasBottomDivider, required, onPress, value }) => {
    return (
      <ListItem bottomDivider={hasBottomDivider}>
        <ListItem.Content style={styles.container}>
          <BaseText style={styles.txtTitle}>{title}</BaseText>
          {required && <BaseText style={styles.required}>*</BaseText>}
        </ListItem.Content>
        <TouchableOpacity onPress={onPress} style={styles.valueContainer}>
          <FontAwesome name="circle" style={styles.statusIcon} />
          <BaseText style={styles.txtValue}>{value}</BaseText>
        </TouchableOpacity>
      </ListItem>
    );
  }
);

ListStatus.displayName = "ListStatus";
