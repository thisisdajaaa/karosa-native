import React from "react";
import { ListItem } from "react-native-elements";
import { Image } from "react-native";

import { AvatarProps } from "./types";
import { styles } from "./styles";

export const AvatarChevron: React.FC<AvatarProps> = ({
  title,
  subtitle,
  hasBottomDivider,
  onPress,
}) => {
  return (
    <ListItem bottomDivider={hasBottomDivider}>
      <Image
        source={require("../../../../assets/hinata.jpg")}
        style={styles.avatarImg}
      />
      <ListItem.Content>
        <ListItem.Title>{title}</ListItem.Title>
        <ListItem.Subtitle>{subtitle}</ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron onPress={onPress} />
    </ListItem>
  );
};
