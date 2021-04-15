/**
 *
 * Reviews
 * @format
 *
 */

import React, { FC } from "react";
import { View, Image } from "react-native";
import { BaseText } from "@app/components/base-text";
import { AntDesign } from "@expo/vector-icons";
import ReviewImages from "@app/atoms/ReviewImages";
import Rating from "@app/molecules/Rating";
import type { PropsType } from "./types";

import ReviewsStyles from "./styles";

const Reviews: FC<PropsType> = (props) => {
  const {
    username,
    comments,
    likes,
    tags,
    rate,
    avatarPhoto = require("../../../assets/seller.jpg"),
  } = props;

  return (
    <View style={ReviewsStyles.subContainer}>
      <View style={ReviewsStyles.reviewContainer}>
        <View style={ReviewsStyles.buyerContainer}>
          <Image source={avatarPhoto} style={ReviewsStyles.sellerImage} />
          <View style={ReviewsStyles.txtNameAddress}>
            <View>
              <BaseText style={ReviewsStyles.txtBlackRegular}>
                {username}
              </BaseText>
              <View style={ReviewsStyles.ratingContainer}>
                <Rating rate={rate} />
              </View>
            </View>
          </View>
        </View>
        <BaseText>
          <AntDesign name="like2" size={20} style={ReviewsStyles.likedIcon} />
          {likes}
          <AntDesign name="ellipsis1" size={20} style={{ marginLeft: 16 }} />
        </BaseText>
      </View>
      <View style={ReviewsStyles.commentContainer}>
        <BaseText style={ReviewsStyles.txtReviewParagraph}>{comments}</BaseText>
        <View style={ReviewsStyles.tagsContainer}>
          {tags.map((tag) => {
            return (
              <BaseText customStyles={ReviewsStyles.tagsStyle}>{tag}</BaseText>
            );
          })}
        </View>
        <View style={ReviewsStyles.buyerGallery}>
          <ReviewImages
            imageSources={[
              require("../../../assets/tom2.jpg"),
              require("../../../assets/tom1.jpg"),
              require("../../../assets/tom3.jpg"),
            ]}
          />
        </View>
      </View>
    </View>
  );
};

export default Reviews;
