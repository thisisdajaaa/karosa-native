import React, { FC } from "react";
import { View } from "react-native";
import Badge from "@app/atoms/Badge";
import Text from "@app/atoms/Text";
import { BtnGrpContentType } from "./types";
import { buttonGroupContentStyles as styles } from "./styles";

export const ButtonGroupContent: FC<BtnGrpContentType> = ({
  text,
  badgeContainerStyle,
  value,
  textStyle,
  mainContainerStyle,
  isActive = false,
}) => {
  return (
    <View style={mainContainerStyle}>
      <Text text={text} textStyle={textStyle} />
      <Badge
        containerStyle={[styles.badgeStyling, badgeContainerStyle]}
        value={value}
        status={isActive ? "error" : undefined}
        badgeStyle={isActive ? {} : styles.badgeInactive}
        textStyle={
          isActive ? styles.badgeTextStyleWhite : styles.badgeTextStyleBlack
        }
      />
    </View>
  );
};
