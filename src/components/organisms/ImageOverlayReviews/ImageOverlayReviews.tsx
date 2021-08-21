/**
 *
 * ImageOverlayReviews
 * @format
 *
 */

import React, { FC } from "react";

// import ImageOverlayReviewsConfig from "./config";
import type { PropsType } from "./types";
import ImageOverlayReviewsStyles from "./styles";
import { View } from "react-native";
import ImageOverlay from "@app/components/molecules/ImageOverlay";

const ImageOverlayReviews: FC<PropsType> = (props) => {
  const {} = props;

  return (
    <View style={ImageOverlayReviewsStyles.rowContainer}>
      {/* {imageSources.map((imageSource) => {
        return (
          // <Image
          //   source={imageSource}
          //   style={[ReviewImagesStyles.varietyImage, customStyles]}
          // />
          <ImageOverlay>

          </ImageOverlay>
        );
      })} */}
      <ImageOverlay
        source={{
          uri: "https://www.almanac.com/sites/default/files/image_nodes/tomatoes_helios4eos_gettyimages-edit.jpeg",
        }}
        textContent={"+5"}
      />
    </View>
  );
};

export default ImageOverlayReviews;
