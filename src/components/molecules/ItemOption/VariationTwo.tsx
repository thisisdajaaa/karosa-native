/**
 *
 * VariationTwo
 * @format
 *
 */

import React, { FC } from "react";
import { TouchableOpacity, View } from "react-native";
import Text from "@app/atoms/Text";

import type { PropsType } from "./types";
import ItemOptionStyles from "./styles";

const VariationTwo: FC<PropsType> = (props) => {
  const { onDelete, itemName } = props;

  return (
    <View style={ItemOptionStyles.variationTwoContainer}>
      <Text text={itemName} textStyle={ItemOptionStyles.txtHeader} />

      {onDelete && (
        <TouchableOpacity
          style={ItemOptionStyles.deleteIcon}
          onPress={() => onDelete}
        >
          <Text text="x" textStyle={ItemOptionStyles.txtIcon} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default VariationTwo;
