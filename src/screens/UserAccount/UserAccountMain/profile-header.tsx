import React from "react";
import { AntDesign, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Button from "@app/atoms/Button";
import { PropsType as ButtonProps } from "@app/atoms/Button/types";
import ListAvatar from "@app/organisms/ListAvatar";
import { Props as ListAvatarProps } from "@app/organisms/ListAvatar/types";
import Text from "@app/atoms/Text";
import Divider from "@app/atoms/Divider";
import routes from "@app/navigators/routes";

import { styles } from "./styles";

const ProfileHeader: React.FC = () => {
  const { navigate } = useNavigation();

  const myShopButtonProps: ButtonProps = {
    variation: 2,
    onPress: () => navigate(routes.SHOP_MAIN),
    title: "My Shop",
    iconVariationTwo: {
      right: <AntDesign name="right" style={styles.myShopIcon} />,
    },
    containerStyle: styles.myShopButtonContainer,
    textStyle: styles.txtMyShopButton,
  };

  const buyerProps: ListAvatarProps = {
    image: require("../../../../assets/hinata.png"),
    title: "Hinata Shoyo",
    ButtonComponent: <Button {...myShopButtonProps} />,
    style: {
      containerStyle: styles.buyerContainer,
    },
  };

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        style={styles.settingsIconContainer}
        onPress={() => navigate(routes.ACCOUNTS_SETTINGS)}>
        <MaterialIcons name="settings" style={styles.commonIconHeader} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.messageIconContainer}
        onPress={() => console.log("Messages")}>
        <MaterialIcons name="chat" style={styles.commonIconHeader} />
      </TouchableOpacity>

      <ListAvatar {...buyerProps} />

      <Divider />

      <View style={styles.infoContainer}>
        <View style={styles.firstInfoContainer}>
          <MaterialIcons style={styles.peopleIcon} name="people" />
          <Text text="Following" textStyle={styles.txtInfo} />
          <Text text="50" textStyle={styles.txtAmt} />
        </View>
        <View style={styles.secondInfoContainer}>
          <FontAwesome5 name="coins" style={styles.coinsIcon} />
          <Text text="Karosa Coins" textStyle={styles.txtInfo} />
          <Text text="100" textStyle={styles.txtAmt} />
        </View>
      </View>
    </View>
  );
};

export default ProfileHeader;
