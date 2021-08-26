/**
 *
 * ImageOverlayReviews
 * @format
 *
 */

import React, { FC } from "react";

import type { PropsType } from "./types";
import ImageOverlayReviewsStyles from "./styles";
import { View } from "react-native";
import ImageOverlay from "@app/components/molecules/ImageOverlay";

const ImageOverlayReviews: FC<PropsType> = (props) => {
  const { overlayProps } = props;

  return (
    <View style={ImageOverlayReviewsStyles.rowContainer}>
      {overlayProps.map((props) => {
        return (
          <ImageOverlay
            source={props.source}
            textContent={props.textContent}
            textStyle={props.textStyle}
            viewTextStyle={props.viewTextStyle}
            imageStyle={[props.imageStyle]}
            hasOverlay={props.hasOverlay}
            mainContainerStyle={[
              props.mainContainerStyle,
              { flex: 0, marginRight: 10, borderColor: "green" },
            ]}
            imageHeight={props.imageHeight}
            imageWidth={props.imageWidth}
            onClick={props.onPress}
          />
        );
      })}
    </View>
  );
};

export default ImageOverlayReviews;
