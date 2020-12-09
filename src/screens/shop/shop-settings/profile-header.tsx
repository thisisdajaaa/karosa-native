import React from "react";
import { ImageBackground } from "react-native";
import { ListAvatar } from "@app/components/list/list-avatar";
import { Props as ListAvatarProps } from "@app/components/list/list-avatar/types";


import { styles } from "./styles";

const ProfileHeader: React.FC = () => {
  
  const sellerProps: ListAvatarProps = {
    image: require("../../../../assets/hinata.png"),
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
      <ListAvatar {...sellerProps} />
    </ImageBackground>
  );
};

export default ProfileHeader;
