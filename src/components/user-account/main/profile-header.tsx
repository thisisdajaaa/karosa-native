import React from "react";
import { AntDesign, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { View } from "react-native";

import { AppButton } from "../../atoms/button";
import { ListItem } from "../../atoms/list";
import { Props as ButtonProps } from "../../atoms/button/types";
import { Props as ListItemProps } from "../../atoms/list/types";
import { BaseText } from "../../atoms/base-text";

import { styles } from "./styles";

const ProfileHeader: React.FC = () => {
  const myShopProps: ButtonProps = {
    onPress: () => console.log("redirect to shop"),
    title: "My Shop",
    icon: {
      right: <AntDesign name="right" size={16} color="white" />,
    },
    containerStyle: {
      backgroundColor: "#0AA351",
      marginBottom: 12,
      height: 10,
      width: 88,
    },
    textStyle: { fontSize: 11, lineHeight: 14, marginRight: 23 },
  };

  const listItemProps: ListItemProps = {
    image: require("../../../../assets/hinata.png"),
    title: "Hinata Shoyo",
    subTitle: <AppButton {...myShopProps} />,
    style: {
      containerStyle: {
        marginLeft: 13,
      },
    },
  };
  return (
    <View style={styles.headerContainer}>
      <MaterialIcons
        name="settings"
        style={styles.settingsIcon}
        size={24}
        color="#0AA351"
      />
      <MaterialIcons
        name="chat"
        style={styles.messageIcon}
        size={24}
        color="#0AA351"
      />
      <ListItem {...listItemProps} />
      <View style={styles.infoContainer}>
        <View style={styles.firstInfoContainer}>
          <MaterialIcons
            style={{ alignSelf: "center" }}
            name="people"
            size={21}
            color="#0AA351"
          />
          <BaseText customStyles={styles.txtInfo}>Following</BaseText>
          <BaseText customStyles={styles.txtAmt}>50</BaseText>
        </View>
        <View style={styles.secondInfoContainer}>
          <FontAwesome5
            name="coins"
            size={21}
            style={{ alignSelf: "center" }}
            color="#0AA351"
          />
          <BaseText customStyles={styles.txtInfo}>Karosa Coins</BaseText>
          <BaseText customStyles={styles.txtAmt}>100</BaseText>
        </View>
      </View>
    </View>
  );
};

export default ProfileHeader;
