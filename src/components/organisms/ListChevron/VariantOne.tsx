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

import { defaultFontSize } from "./config";
import type { PropsType } from "./types";
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
    fontSize: defaultFontSize,
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
          customStyle={[
            listColor
              ? ListChevronStyles.txtListColor
              : ListChevronStyles.title,
          ]}
        />
        {required && (
          <Text text={"*"} customStyle={ListChevronStyles.txtRequired} />
        )}
      </ListItem.Content>
      {info && (
        <Text
          text={info}
          customStyle={[ListChevronStyles.txtInfo, infoStyle]}
        />
      )}
      <ListItem.Chevron iconStyle={iconStyle} />
    </ListItem>
  );
};

export default VariantOne;
