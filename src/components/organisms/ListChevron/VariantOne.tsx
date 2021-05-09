/**
 *
 * ListChevron
 * @format
 *
 */

import React, { FC } from "react";
import { ListItem } from "react-native-elements";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { theme } from "@app/styles";
import Text from "@app/atoms/Text";

import type { PropsType } from "./types";
import ListChevronStyles from "./styles";
import { View } from "react-native";

const VariantOne: FC<PropsType> = (props) => {
  const {
    hasBottomDivider,
    listColor,
    title,
    onPress,
    info,
    required,
    infoStyle,
    chevronColor = theme.colors.dark10,
  } = props;

  return (
    <ListItem bottomDivider={hasBottomDivider} onPress={onPress}>
      <ListItem.Content style={ListChevronStyles.container}>
        {listColor && (
          <MaterialCommunityIcons
            style={ListChevronStyles.listColor}
            name="checkbox-blank"
            color={listColor}
          />
        )}
        <Text
          text={title}
          textStyle={[
            listColor
              ? ListChevronStyles.txtListColor
              : ListChevronStyles.title,
          ]}
        />
        {required && (
          <Text text={"*"} textStyle={ListChevronStyles.txtRequired} />
        )}
      </ListItem.Content>
      {info && (
        <View style={ListChevronStyles.infoContainer}>
          <Text
            text={info}
            textStyle={[ListChevronStyles.txtInfo, infoStyle]}
          />
        </View>
      )}
      <ListItem.Chevron iconStyle={{ color: chevronColor }} />
    </ListItem>
  );
};

export default VariantOne;
