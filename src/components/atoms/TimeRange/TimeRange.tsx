/**
 *
 * TimeRange
 * @format
 *
 */

import React, { FC } from "react";
import { View } from "react-native";
import { TextInputMask } from "react-native-masked-text";
import { theme } from "@app/styles";
import Text from "@app/atoms/Text";

import type { PropsType } from "./types";
import { HOUR_MIN } from "./config";
import TimeRangeStyles from "./styles";

const TimeRange: FC<PropsType> = (props) => {
  const { startValue, endValue, style, onStartTimeChange, onEndTimeChange } =
    props;

  return (
    <View style={[TimeRangeStyles.timeRange, style]}>
      <TextInputMask
        type="datetime"
        placeholder={HOUR_MIN}
        options={{
          format: HOUR_MIN,
        }}
        placeholderTextColor={theme.colors.primary}
        value={startValue}
        returnKeyType="done"
        onChangeText={onStartTimeChange}
      />

      <Text text="-" textStyle={TimeRangeStyles.separator} />

      <TextInputMask
        type="datetime"
        placeholder={HOUR_MIN}
        options={{
          format: HOUR_MIN,
        }}
        placeholderTextColor={theme.colors.primary}
        value={endValue}
        returnKeyType="done"
        onChangeText={onEndTimeChange}
      />
    </View>
  );
};

export default TimeRange;
