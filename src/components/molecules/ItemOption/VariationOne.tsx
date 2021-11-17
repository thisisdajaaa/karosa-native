/**
 *
 * VariationOne
 * @format
 *
 */

import React, { FC } from "react";
import { TouchableOpacity, View } from "react-native";
import Text from "@app/atoms/Text";
import Image from "@app/atoms/Image";

import type { PropsType } from "./types";
import ItemOptionStyles from "./styles";

const VariationOne: FC<PropsType> = (props) => {
  const { image, onDelete, itemName } = props;

  return (
    <View style={ItemOptionStyles.variationOneContainer}>
      <View style={ItemOptionStyles.variationOneHeader}>
        <Text text={itemName} textStyle={ItemOptionStyles.txtHeader} />
      </View>
      <Image
        source={{ uri: image }}
        imageStyle={ItemOptionStyles.itemImage}
        resizeMode="cover"
      />

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

export default VariationOne;
