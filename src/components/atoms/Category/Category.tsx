/**
 *
 * Category
 * @format
 *
 */

import React, { FC } from "react";
import { View, Pressable } from "react-native";
import Text from "@app/atoms/Text";

import type { PropsType } from "./types";
import CategoryStyles from "./styles";

const Category: FC<PropsType> = (props) => {
  const { name, onPress } = props;

  return (
    <Pressable onPress={onPress}>
      <View style={CategoryStyles.categoryContainer}>
        <View style={CategoryStyles.categoryCircle} />
        <View style={CategoryStyles.nameContainer}>
          <Text text={name} textStyle={CategoryStyles.txtName} />
        </View>
      </View>
    </Pressable>
  );
};

export default Category;
