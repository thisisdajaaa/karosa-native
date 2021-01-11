/**
 *
 * Text
 * @format
 *
 */

import React, { FC } from "react";
import { Text as RnText } from "react-native-elements";

import type { PropsType } from "./types";
import TextStyles from "./styles";

const Text: FC<PropsType> = (props) => {
  const { text, customStyle, numberOfLines, ellipsizeMode } = props;

  return (
    <RnText
      style={[TextStyles.text, customStyle]}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
    >
      {text}
    </RnText>
  );
};

export default Text;
