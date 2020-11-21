import React from "react";
import { AntDesign, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AppButton } from "@app/components/button";
import { ListAvatar } from "@app/components/list/list-avatar";
import { Separator } from "@app/components/separator";
import { Props as ButtonProps } from "@app/components/button/types";
import { Props as ListAvatarProps } from "@app/components/list/list-avatar/types";
import { BaseText } from "@app/components/base-text";
import routes from "@app/navigators/routes";

import { styles } from "./styles";

const ProfileHeader: React.FC = () => {
  const { navigate } = useNavigation();

  const myShopButtonProps: ButtonProps = {
    onPress: () => navigate(routes.SHOP_MAIN),
    title: "My Shop",
    icon: {
      right: <AntDesign name="right" style={styles.myShopIcon} />,
    },
    containerStyle: styles.myShopButtonContainer,
    textStyle: styles.txtMyShopButton,
  };

  const buyerProps: ListAvatarProps = {
    image: require("../../../../assets/hinata.png"),
    title: "Hinata Shoyo",
    ButtonComponent: <AppButton {...myShopButtonProps} />,
    style: {
      containerStyle: styles.buyerContainer,
    },
  };

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        style={styles.settingsIconContainer}
        onPress={() => navigate(routes.ACCOUNTS_SETTINGS)}
      >
        <MaterialIcons name="settings" style={styles.commonIconHeader} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.messageIconContainer}
        onPress={() => console.log("Messages")}
      >
        <MaterialIcons name="chat" style={styles.commonIconHeader} />
      </TouchableOpacity>

      <ListAvatar {...buyerProps} />

      <Separator />

      <View style={styles.infoContainer}>
        <View style={styles.firstInfoContainer}>
          <MaterialIcons style={styles.peopleIcon} name="people" />
          <BaseText customStyles={styles.txtInfo}>Following</BaseText>
          <BaseText customStyles={styles.txtAmt}>50</BaseText>
        </View>
        <View style={styles.secondInfoContainer}>
          <FontAwesome5 name="coins" style={styles.coinsIcon} />
          <BaseText customStyles={styles.txtInfo}>Karosa Coins</BaseText>
          <BaseText customStyles={styles.txtAmt}>100</BaseText>
        </View>
      </View>
    </View>
  );
};

export default ProfileHeader;
