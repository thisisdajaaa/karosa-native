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
import { FONT_SIZE } from "./config";
import ListChevronStyles from "./styles";

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

  const iconStyle = {
    color: chevronColor,
    fontSize: FONT_SIZE,
  };

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
        <Text text={info} textStyle={[ListChevronStyles.txtInfo, infoStyle]} />
      )}
      <ListItem.Chevron iconStyle={iconStyle} />
    </ListItem>
  );
};

export default VariantOne;
