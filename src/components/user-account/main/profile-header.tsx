import React from "react";
import { AntDesign, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { AppButton } from "../../atoms/button";
import { ListAvatar } from "../../atoms/list/list-avatar";
import { Separator } from "../../atoms/separator";
import { Props as ButtonProps } from "../../atoms/button/types";
import { Props as ListAvatarProps } from "../../atoms/list/list-avatar/types";
import { BaseText } from "../../atoms/base-text";
import routes from "../../../navigators/routes";

import { styles } from "./styles";

const ProfileHeader: React.FC = () => {
  const { navigate } = useNavigation();

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
    textStyle: {
      fontSize: 11,
      lineHeight: 14,
      alignSelf: "center",
      position: "absolute",
      left: 10,
    },
  };

  const listAvatarProps: ListAvatarProps = {
    image: require("../../../../assets/hinata.png"),
    title: "Hinata Shoyo",
    ButtonComponent: <AppButton {...myShopProps} />,
    style: {
      containerStyle: {
        marginLeft: 33,
        marginBottom: 7,
      },
    },
  };
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        style={styles.settingsIcon}
        onPress={() => navigate(routes.ACCOUNTS_SETTINGS)}
      >
        <MaterialIcons name="settings" size={24} color="#0AA351" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.messageIcon}
        onPress={() => console.log("gg2")}
      >
        <MaterialIcons name="chat" size={24} color="#0AA351" />
      </TouchableOpacity>

      <ListAvatar {...listAvatarProps} />

      <Separator />

      <View style={styles.infoContainer}>
        <View style={styles.firstInfoContainer}>
          <MaterialIcons
            style={styles.peopleIcon}
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
            style={styles.coinsIcon}
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
