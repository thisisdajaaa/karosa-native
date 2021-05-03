/**
 *
 * Categories
 * @format
 *
 */

import React, { FC } from "react";
import { View } from "react-native";

import { BaseText } from "@app/components/base-text";

import type { PropsType } from "./types";
import CategoriesStyles from "./styles";

const Categories: FC<PropsType> = (props) => {
  const { name } = props;

  return (
    <View style={CategoriesStyles.categoryContainer}>
      <View style={CategoriesStyles.categoryCircle} />
      <View style={CategoriesStyles.nameContainer}>
        <BaseText style={CategoriesStyles.txtName}>{name}</BaseText>
      </View>
    </View>
  );
};

export default Categories;
