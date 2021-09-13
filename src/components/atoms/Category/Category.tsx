/**
 *
 * Category
 * @format
 *
 */

import React, { FC } from "react";
import { View, Pressable } from "react-native";
import Text from "@app/atoms/Text";
import Icon from "@app/atoms/Icon";

import type { PropsType } from "./types";
import { ICON_SIZE } from "./config";
import CategoryStyles from "./styles";

const Category: FC<PropsType> = (props) => {
  const { name, iconName, onPress } = props;

  return (
    <Pressable onPress={onPress}>
      <View style={CategoryStyles.categoryContainer}>
        <Icon
          group="products"
          name={iconName}
          width={ICON_SIZE}
          height={ICON_SIZE}
        />
        <View style={CategoryStyles.nameContainer}>
          <Text text={name} textStyle={CategoryStyles.txtName} />
        </View>
      </View>
    </Pressable>
  );
};

export default Category;
