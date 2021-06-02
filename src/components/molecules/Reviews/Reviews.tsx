/**
 *
 * Reviews
 * @format
 *
 */

import React, { FC } from "react";
import { View } from "react-native";
import Text from "@app/atoms/Text";
import { AntDesign } from "@expo/vector-icons";
import ReviewImages from "@app/atoms/ReviewImages";
import { Rating } from "react-native-elements";
import Image from "@app/atoms/Image";
import type { PropsType } from "./types";

import ReviewsStyles from "./styles";

const Reviews: FC<PropsType> = (props) => {
  const { username, comments, likes, tags } = props;

  return (
    <View style={ReviewsStyles.subContainer}>
      <View style={ReviewsStyles.reviewContainer}>
        <View style={ReviewsStyles.buyerContainer}>
          <Image
            source={{
              uri: "http://2.bp.blogspot.com/-wvCP_ff54N4/Ukpp0EjfInI/AAAAAAAAAYI/QR4VOlfCLfg/s1600/index.jpg",
            }}
            imageStyle={ReviewsStyles.sellerImage}
          />
          <View style={ReviewsStyles.txtNameAddress}>
            <View>
              <Text text={username} textStyle={ReviewsStyles.txtBlackRegular} />
              <View style={ReviewsStyles.ratingContainer}>
                <Rating
                  type="star"
                  ratingCount={5}
                  readonly
                  imageSize={15}
                  startingValue={5}
                />
              </View>
            </View>
          </View>
        </View>
        <View>
          <AntDesign name="like2" size={20} style={ReviewsStyles.likedIcon} />
          <Text text={likes.toString()} />
          <AntDesign name="ellipsis1" size={20} style={{ marginLeft: 16 }} />
        </View>
      </View>
      <View style={ReviewsStyles.commentContainer}>
        <Text text={comments} textStyle={ReviewsStyles.txtReviewParagraph} />
        <View style={ReviewsStyles.tagsContainer}>
          {tags.map((tag) => {
            return <Text text={tag} textStyle={ReviewsStyles.tagsStyle} />;
          })}
        </View>
        <View style={ReviewsStyles.buyerGallery}>
          <ReviewImages
            imageSources={[
              {
                uri: "https://www.almanac.com/sites/default/files/image_nodes/tomatoes_helios4eos_gettyimages-edit.jpeg",
              },
              {
                uri: "https://www.almanac.com/sites/default/files/image_nodes/tomatoes_helios4eos_gettyimages-edit.jpeg",
              },
              {
                uri: "https://www.almanac.com/sites/default/files/image_nodes/tomatoes_helios4eos_gettyimages-edit.jpeg",
              },
            ]}
          />
        </View>
      </View>
    </View>
  );
};

export default Reviews;
