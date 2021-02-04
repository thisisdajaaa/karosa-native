import React from "react";
import { View, Image } from "react-native";
import { BaseText } from "@app/components/base-text";
import { AntDesign } from "@expo/vector-icons";
import { Images } from "@app/components/image";
import { Rating } from "@app/components/rating";

import { styles } from "./styles";
import { Props } from "./types";

export const Reviews: React.FC<Props> = ({
  avatarPhoto = require("../../../assets/seller.jpg"),
  username,
  comments,
  likes,
  tags,
  rate,
}) => {
  return (
    <View style={styles.subContainer}>
      <View style={styles.reviewContainer}>
        <View style={styles.buyerContainer}>
          <Image source={avatarPhoto} style={styles.sellerImage} />
          <View style={styles.txtNameAddress}>
            <View>
              <BaseText style={styles.txtBlackRegular}>{username}</BaseText>
              <View style={styles.ratingContainer}>
                <Rating rate={rate} />
              </View>
            </View>
          </View>
        </View>
        <BaseText>
          <AntDesign name="like2" size={20} style={styles.likedIcon} />
          {likes}
          <AntDesign name="ellipsis1" size={20} style={{ marginLeft: 16 }} />
        </BaseText>
      </View>
      <View style={styles.commentContainer}>
        <BaseText style={styles.txtReviewParagraph}>{comments}</BaseText>
        <View style={styles.tagsContainer}>
          {tags.map((tag) => {
            return <BaseText customStyles={styles.tagsStyle}>{tag}</BaseText>;
          })}
        </View>
        <View style={styles.buyerGallery}>
          <Images
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
