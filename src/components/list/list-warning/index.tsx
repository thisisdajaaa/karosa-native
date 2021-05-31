import React from "react";
import { ListItem } from "react-native-elements";
import { BaseText } from "@app/components/base-text";
import { TouchableOpacity } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { theme } from "@app/styles";

import { Props } from "./types";
import { styles } from "./styles";

export const ListWarning: React.FC<Props> = React.memo(
  ({ message, onPress }) => {
    return (
      <ListItem
        containerStyle={{ backgroundColor: theme.colors.gold15, height: 88 }}>
        <ListItem.Content style={styles.content}>
          <MaterialIcons name="warning" style={styles.warningIcon} />
          <ListItem.Content style={styles.txtContainer}>
            <BaseText style={styles.txtMessage}>{message}</BaseText>
          </ListItem.Content>
          <TouchableOpacity onPress={onPress}>
            <AntDesign name="close" style={styles.closeIcon} />
          </TouchableOpacity>
        </ListItem.Content>
      </ListItem>
    );
  }
);

ListWarning.displayName = "ListWarning";
