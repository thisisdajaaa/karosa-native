/**
 *
 * ListAvatar
 * @format
 *
 */

import React from "react";
import { View, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Text from "@app/atoms/Text";
import { Props } from "./types";
import { styles } from "./styles";

const ListAvatar: React.FC<Props> = ({
  title = "",
  subTitle,
  image,
  IconComponent,
  ButtonComponent,
  isActive,
  followers,
  following,
  rating,
  style,
}) => {
  return (
    <View style={[styles.container, style?.containerStyle]}>
      {IconComponent}
      {image && (
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={image} />
        </View>
      )}
      <View style={styles.detailsContainer}>
        <Text
          text={title}
          textStyle={[styles.title, style?.textStyle]}
          numberOfLines={2}
        />
        {subTitle && (
          <Text text={subTitle} textStyle={styles.subTitle} numberOfLines={1} />
        )}
        {rating && followers && following && (
          <React.Fragment>
            <View style={styles.separator} />
            <View style={styles.activeRateContainer}>
              {isActive ? (
                <React.Fragment>
                  <View style={styles.activeCircle} />
                  <Text text="Active" textStyle={styles.txtActive} />
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <View style={styles.inactiveCircle} />
                  <Text text="Inactive" textStyle={styles.txtActive} />
                </React.Fragment>
              )}

              <FontAwesome name="star" style={styles.starIcon} />
              <Text text={rating} textStyle={styles.rateText} />
            </View>

            <View style={styles.followContainer}>
              <Text text="Followers" textStyle={styles.txtFollowers} />
              <Text text={followers} textStyle={styles.followersValue} />
              <Text text="Following" textStyle={styles.txtFollowing} />
              <Text text={following} textStyle={styles.followingValue} />
            </View>
          </React.Fragment>
        )}

        {ButtonComponent && <View>{ButtonComponent}</View>}
      </View>
    </View>
  );
};

export default ListAvatar;
