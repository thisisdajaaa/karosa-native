/**
 *
 * FilterChip
 * @format
 *
 */

import React, { FC } from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import Text from "@app/atoms/Text";

import type { FilterChipProps } from "./types";
import { FilterChipStyles } from "./styles";
import FilterRating from "./FilterRating";

const FilterChip: FC<FilterChipProps> = (props) => {
  const { selected, onPress, text, rating, total } = props;

  const {
    container,
    text: textStyle,
    total: totalStyle,
  } = FilterChipStyles(selected);

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={container}>
        {text && !total && <Text text={text} textStyle={textStyle} />}

        {text && total && (
          <>
            <Text text={text} textStyle={textStyle} />
            <Text text={`(${total})`} textStyle={totalStyle} />
          </>
        )}

        {rating && total && (
          <>
            <FilterRating startingValue={rating} />

            <Text text={`(${total})`} textStyle={totalStyle} />
          </>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default FilterChip;
