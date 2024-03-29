/**
 *
 * VariationOne
 * @format
 *
 */

import React, { FC } from "react";
import { ListItem } from "react-native-elements";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { theme } from "@app/styles";
import Text from "@app/atoms/Text";
import Icon from "@app/atoms/Icon";

import type { PropsType } from "./types";
import ListChevronStyles from "./styles";
import { NUM_LINE } from "./config";

const VariationOne: FC<PropsType> = (props) => {
  const {
    hasBottomDivider,
    listColor,
    title,
    onPress,
    info,
    required,
    infoStyle,
    icon,
    titleStyle,
    subtitle,
    containerStyle,
    chevronColor = theme.colors.dark10,
  } = props;

  return (
    <ListItem
      containerStyle={containerStyle}
      bottomDivider={hasBottomDivider}
      onPress={onPress}
    >
      <ListItem.Content style={ListChevronStyles.container}>
        {listColor && (
          <>
            <MaterialCommunityIcons
              style={ListChevronStyles.listColor}
              name="checkbox-blank"
              color={listColor}
            />

            <Text text={title} textStyle={ListChevronStyles.txtListColor} />
          </>
        )}

        {icon && (
          <>
            {subtitle ? (
              <>
                <Icon
                  group={icon.group}
                  name={icon.name}
                  height={icon.height}
                  width={icon.width}
                  extraStyle={ListChevronStyles.iconSubtitle}
                />
                <View>
                  <View style={ListChevronStyles.flexRow}>
                    <Text
                      text={title}
                      numberOfLines={NUM_LINE}
                      textStyle={[ListChevronStyles.txtWithIcon, titleStyle]}
                    />

                    {required && (
                      <Text
                        text={"*"}
                        textStyle={ListChevronStyles.txtRequired}
                      />
                    )}
                  </View>

                  <Text
                    text={subtitle}
                    textStyle={ListChevronStyles.txtSubtitleVariationOne}
                  />
                </View>
              </>
            ) : (
              <>
                <Icon
                  group={icon.group}
                  name={icon.name}
                  height={icon.height}
                  width={icon.width}
                />
                <Text
                  text={title}
                  textStyle={[ListChevronStyles.txtWithIcon, titleStyle]}
                />
              </>
            )}
          </>
        )}

        {!listColor && !icon && (
          <>
            <Text
              text={title}
              textStyle={[ListChevronStyles.title, titleStyle]}
            />

            {required && (
              <Text text={"*"} textStyle={ListChevronStyles.txtRequired} />
            )}
          </>
        )}
      </ListItem.Content>

      {info && subtitle ? (
        <View style={ListChevronStyles.infoSubtitleContainer}>
          <Text
            text={info}
            textStyle={[ListChevronStyles.txtInfo, infoStyle]}
          />
        </View>
      ) : null}

      {info && !subtitle ? (
        <View style={ListChevronStyles.infoContainer}>
          <Text
            text={info}
            numberOfLines={NUM_LINE}
            textStyle={[ListChevronStyles.txtInfo, infoStyle]}
          />
        </View>
      ) : null}

      {subtitle ? (
        <View style={ListChevronStyles.chevronSubtitleContainer}>
          <ListItem.Chevron iconStyle={{ color: chevronColor }} />
        </View>
      ) : (
        <ListItem.Chevron iconStyle={{ color: chevronColor }} />
      )}
    </ListItem>
  );
};

export default VariationOne;
