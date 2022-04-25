/**
 *
 * ProductRatings
 * @format
 *
 */

import React, { FC } from "react";
import { View } from "react-native";
import { ListItem } from "react-native-elements";
import Rating from "@app/atoms/Rating";
import Text from "@app/atoms/Text";
import Reviews from "@app/molecules/Reviews";

import type { ProductRatingsProps } from "./types";
import { DUMMY_REVIEWS } from "./config";
import { ProductRatingsStyles } from "./styles";

const ProductRatings: FC<ProductRatingsProps> = (props) => {
  const { onReviews } = props;

  return (
    <View style={ProductRatingsStyles.container}>
      <ListItem
        onPress={onReviews}
        containerStyle={ProductRatingsStyles.listContainer}
        bottomDivider
      >
        <ListItem.Content style={ProductRatingsStyles.firstContent}>
          <Text
            text="Ratings and Reviews"
            textStyle={ProductRatingsStyles.txtRatings}
          />
          <Text text="(60)" textStyle={ProductRatingsStyles.txtRatingValue} />

          <Text text="See All" textStyle={ProductRatingsStyles.txtSee} />
          <ListItem.Chevron iconStyle={ProductRatingsStyles.chevron} />
        </ListItem.Content>

        <ListItem.Content style={ProductRatingsStyles.secondContent}>
          <Rating ratingCount={5} readonly imageSize={10} startingValue={5} />
        </ListItem.Content>
      </ListItem>

      {DUMMY_REVIEWS.slice(0, 3).map((review, index) => (
        <Reviews
          key={index}
          hasBottomDivider={index !== DUMMY_REVIEWS.length - 1}
          date={review.date}
          variation={review.variation}
          rate={review.rate}
          username={review.username}
          overlay={review.overlay}
          feedback={review.feedback}
          avatarPhoto={review.avatarPhoto}
        />
      ))}
    </View>
  );
};

export default ProductRatings;
