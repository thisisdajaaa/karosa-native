/**
 *
 * Timeline
 * @format
 *
 */

import React, { FC } from "react";
import { View } from "react-native";

// import TimelineConfig from './config';
import { timelineProps } from "./types";
import TimelineStyles from "./styles";
import Text from "@app/atoms/Text";

const Timeline: FC<timelineProps> = ({ data }) => {
  const manipulatedData = data.map((item) => {
    const separateDateTime = item.date.split(" ");
    return {
      dateMonth: `${separateDateTime[0]} ${separateDateTime[1]}`,
      time: separateDateTime[2],
      description: item.description,
    };
  });
  const getLastIndex = manipulatedData.length - 1;
  return (
    <View>
      {manipulatedData.map((item, index) => (
        <View style={TimelineStyles.mainContainer} key={index}>
          <View
            style={
              index < getLastIndex
                ? TimelineStyles.leftContent
                : TimelineStyles.leftContentNoBorder
            }>
            <Text text={item.dateMonth} textStyle={TimelineStyles.colorGreen} />
            <Text text={item.time} textStyle={TimelineStyles.colorGreen} />
            <View
              style={
                index === 0
                  ? TimelineStyles.circleActive
                  : TimelineStyles.circleInActive
              }
            />
          </View>
          <Text text={item.description} textStyle={TimelineStyles.padLeft} />
        </View>
      ))}
    </View>
  );
};

export default Timeline;
