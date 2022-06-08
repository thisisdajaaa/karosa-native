/**
 *
 * Reviews
 * @format
 *
 */

import React, { FC } from "react";
import { View } from "react-native";
import Text from "@app/atoms/Text";
import Rating from "@app/atoms/Rating";
import Image from "@app/atoms/Image";
import ExpandableText from "@app/molecules/ExpandableText";
import ImageOverlayReviews from "@app/organisms/ImageOverlayReviews";

import type { PropsType } from "./types";
import ReviewsStyles from "./styles";

const Reviews: FC<PropsType> = (props) => {
  const {
    avatarPhoto,
    date,
    feedback,
    rate,
    variation,
    overlay,
    username,
    hasBottomDivider,
    ratingImage,
    ratingType,
  } = props;

  return (
    <View
      style={[
        ReviewsStyles.container,
        hasBottomDivider ? ReviewsStyles.divider : null,
      ]}
    >
      <View style={ReviewsStyles.column}>
        <Image
          source={{
            uri: avatarPhoto,
          }}
          imageStyle={ReviewsStyles.avatar}
          resizeMode="cover"
        />
      </View>
      <View style={ReviewsStyles.details}>
        <Text text={username} textStyle={ReviewsStyles.txtUsername} />

        <View style={ReviewsStyles.primaryMargin}>
          <Rating
            ratingCount={5}
            readonly
            imageSize={10}
            startingValue={rate}
            ratingImage={ratingImage}
            type={ratingType}
          />
        </View>

        <View style={ReviewsStyles.primaryMargin}>
          <ExpandableText
            text={feedback}
            readMoreStyle={ReviewsStyles.readMore}
          />
        </View>

        {overlay && (
          <View style={ReviewsStyles.secondaryMargin}>
            <ImageOverlayReviews overlayProps={overlay} />
          </View>
        )}

        <Text
          text={`${date}, Variation: ${variation}`}
          textStyle={ReviewsStyles.txtVariation}
        />
      </View>
    </View>
  );
};

export default Reviews;
