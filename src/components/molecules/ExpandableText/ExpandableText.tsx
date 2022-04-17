/**
 *
 * ExpandableText
 * @format
 *
 */

import React, { FC, useState, useEffect, useCallback } from "react";
import Text from "@app/atoms/Text";

import type { PropsType } from "./types";

const ExpandableText: FC<PropsType> = (props) => {
  const { readMoreStyle, text, textStyle } = props;

  const [textShown, setTextShown] = useState<boolean>(false);
  const [numLines, setNumLines] = useState<number | undefined>(undefined);

  const toggleTextShown = () => {
    setTextShown(!textShown);
  };

  useEffect(() => {
    setNumLines(textShown ? undefined : 4);
  }, [textShown]);

  const onTextLayout = useCallback(
    (e) => {
      if (e.nativeEvent.lines.length > 4 && !textShown) {
        setNumLines(4);
      }
    },
    [textShown]
  );

  return (
    <>
      <Text
        text={text}
        textStyle={textStyle}
        onTextLayout={onTextLayout}
        numberOfLines={numLines}
        ellipsizeMode="tail"
      />

      <Text
        text={textShown ? "Read Less" : "Read More"}
        textStyle={readMoreStyle}
        onPress={toggleTextShown}
      />
    </>
  );
};

export default ExpandableText;
