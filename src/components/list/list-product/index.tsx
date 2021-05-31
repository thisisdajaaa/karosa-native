import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { ListItem } from "react-native-elements";
import { BaseText } from "@app/components/base-text";

import { Props } from "./types";
import { styles } from "./styles";

export const ListProduct: React.FC<Props> = ({ item, ActionButton }) => {
  return (
    <ListItem bottomDivider style={styles.container}>
      <ListItem.Content style={styles.flexWrapping}>
        <ListItem.Content style={styles.subContainerOne}>
          <Image
            source={require("../../../../assets/hinata.png")}
            style={styles.image}
            resizeMode={"cover"}
          />
          <ListItem.Content style={styles.topContainer}>
            <BaseText numberOfLines={2} style={styles.txtName}>
              {item.name}
            </BaseText>
            <BaseText style={styles.txtPrice}>PHP 300</BaseText>
            <ListItem.Content style={styles.badgeContainer}>
              <View style={styles.wholesaleContainer}>
                <BaseText style={styles.txtBadge}>Wholesale</BaseText>
              </View>
              <View style={styles.discountContainer}>
                <BaseText style={styles.txtBadge}>-10%</BaseText>
              </View>
            </ListItem.Content>
          </ListItem.Content>
        </ListItem.Content>
        <ListItem.Content style={styles.subContainerTwo}>
          <ListItem.Content style={styles.midContainerOne}>
            <ListItem.Content style={styles.variationContainerOne}>
              <BaseText style={styles.txtLabel}>Stock</BaseText>
              <BaseText style={styles.txtValue}>12</BaseText>
            </ListItem.Content>
            <ListItem.Content style={styles.variationContainerTwo}>
              <BaseText style={styles.txtLabel}>Likes</BaseText>
              <BaseText style={styles.txtValue}>120</BaseText>
            </ListItem.Content>
          </ListItem.Content>
          <ListItem.Content style={styles.space} />
          <ListItem.Content style={styles.midContainerTwo}>
            <ListItem.Content style={styles.variationContainerOne}>
              <BaseText style={styles.txtLabel}>Sold</BaseText>
              <BaseText style={styles.txtValue}>8</BaseText>
            </ListItem.Content>
            <ListItem.Content style={styles.variationContainerTwo}>
              <BaseText style={styles.txtLabel}>Rating</BaseText>
              <BaseText style={styles.txtValue}>4.5</BaseText>
            </ListItem.Content>
          </ListItem.Content>
        </ListItem.Content>
        <ListItem.Content style={styles.botContainer}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => console.log("discontinue")}>
            <AntDesign name="minuscircle" style={styles.discontinueIcon} />
            <BaseText style={styles.txtDiscontinue}>Discontinue</BaseText>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => console.log("edit")}>
            <MaterialIcons name="edit" style={styles.editIcon} />
            <BaseText style={styles.txtEdit}>Edit</BaseText>
          </TouchableOpacity>
          {ActionButton}
        </ListItem.Content>
      </ListItem.Content>
    </ListItem>
  );
};
