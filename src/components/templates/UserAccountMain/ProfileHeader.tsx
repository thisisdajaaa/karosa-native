import React, { FC } from "react";
import { AntDesign, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Button from "@app/atoms/Button";
import ListAvatar from "@app/organisms/ListAvatar";
import Text from "@app/atoms/Text";
import Divider from "@app/atoms/Divider";
import routes from "@app/navigators/routes";
import type { PropsType as ButtonProps } from "@app/atoms/Button/types";
import type { Props as ListAvatarProps } from "@app/organisms/ListAvatar/types";

import UserAccountMainStyles from "./styles";
import { theme } from "@app/styles";

const ProfileHeader: FC = () => {
  const { navigate } = useNavigation();

  const myShopButtonProps: ButtonProps = {
    onPress: () => navigate(routes.SHOP_MAIN),
    title: "My Shop",
    buttonStyle: {
      width: 95,
      height: 31,
    },
    titleStyle: {
      ...theme.textLightBold,
      position: "absolute",
      textAlign: "center",
      left: 15,
    },
    containerStyle: {
      width: 95,
      height: 31,
    },
    icon: <AntDesign name="right" style={UserAccountMainStyles.myShopIcon} />,
  };

  const buyerProps: ListAvatarProps = {
    image: require("../../../../assets/hinata.png"),
    title: "Hinata Shoyo",
    ButtonComponent: <Button {...myShopButtonProps} />,
    style: {
      containerStyle: UserAccountMainStyles.buyerContainer,
    },
  };

  return (
    <View style={UserAccountMainStyles.headerContainer}>
      <View style={UserAccountMainStyles.iconContainer}>
        <TouchableOpacity onPress={() => navigate(routes.ACCOUNTS_SETTINGS)}>
          <MaterialIcons
            name="settings"
            style={UserAccountMainStyles.commonIconHeader}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => 0}>
          <MaterialIcons
            name="chat"
            style={UserAccountMainStyles.commonIconHeader}
          />
        </TouchableOpacity>
      </View>

      <ListAvatar {...buyerProps} />

      <Divider />

      <View style={UserAccountMainStyles.infoContainer}>
        <View style={UserAccountMainStyles.firstInfoContainer}>
          <MaterialIcons
            style={UserAccountMainStyles.peopleIcon}
            name="people"
          />
          <Text text="Following" textStyle={UserAccountMainStyles.txtInfo} />
          <Text text="50" textStyle={UserAccountMainStyles.txtAmt} />
        </View>
        <View style={UserAccountMainStyles.secondInfoContainer}>
          <FontAwesome5 name="coins" style={UserAccountMainStyles.coinsIcon} />
          <Text text="Karosa Coins" textStyle={UserAccountMainStyles.txtInfo} />
          <Text text="100" textStyle={UserAccountMainStyles.txtAmt} />
        </View>
      </View>
    </View>
  );
};

export default ProfileHeader;
