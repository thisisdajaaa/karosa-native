import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ListAvatar } from "@app/components/list/list-avatar";
import { Props as ListAvatarProps } from "@app/components/list/list-avatar/types";
import routes from "@app/navigators/routes";

import { styles } from "./styles";

const ProfileHeader: React.FC = () => {
  const { navigate, goBack } = useNavigation();

  const sellerProps: ListAvatarProps = {
    image: require("../../../../assets/hinata.png"),
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    isActive: true,
    rating: "4.2",
    following: "1.2K",
    followers: "1.3k",
    style: {
      containerStyle: styles.sellerContainer,
      textStyle: styles.txtSeller,
    },
  };
  return (
    <ImageBackground
      style={styles.headerContainer}
      blurRadius={1}
      source={require("../../../../assets/shop.jpg")}
    >
      <TouchableOpacity style={styles.arrowIcon} onPress={() => goBack()}>
        <MaterialIcons name="arrow-back" style={styles.profileIcon} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.settingsIcon}
        onPress={() =>
          navigate("Stack", { screen: routes.SHOP_TERMS_AND_CONDITIONS })
        }
      >
        <MaterialIcons name="settings" style={styles.profileIcon} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.messageIcon}
        onPress={() =>
          navigate("Main Stack", { screen: routes.DUMMY_MESSAGES })
        }
      >
        <MaterialIcons name="chat" style={styles.profileIcon} />
      </TouchableOpacity>

      <ListAvatar {...sellerProps} />
    </ImageBackground>
  );
};

export default ProfileHeader;
