/**
 *
 * Category
 * @format
 *
 */

import React, { FC } from "react";
import { View, Pressable } from "react-native";

import { BaseText } from "@app/components/base-text";

import type { PropsType } from "./types";
import CategoryStyles from "./styles";

const Category: FC<PropsType> = (props) => {
  const { name, onPress } = props;

  return (
    <Pressable onPress={onPress}>
      <View style={CategoryStyles.categoryContainer}>
        <View style={CategoryStyles.categoryCircle} />
        <View style={CategoryStyles.nameContainer}>
          <BaseText style={CategoryStyles.txtName}>{name}</BaseText>
        </View>
      </View>
    </Pressable>
  );
};

export default Category;
