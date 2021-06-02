import React from "react";
import { View, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { BaseText } from "../../base-text";

import { Props } from "./types";
import { styles } from "./styles";

export const ListAvatar: React.FC<Props> = ({
  title,
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
        <BaseText
          customStyles={[styles.title, style?.textStyle]}
          numberOfLines={2}>
          {title}
        </BaseText>
        {subTitle && (
          <BaseText style={styles.subTitle} numberOfLines={1}>
            {subTitle}
          </BaseText>
        )}
        {rating && followers && following && (
          <React.Fragment>
            <View style={styles.separator} />
            <View style={styles.activeRateContainer}>
              {isActive ? (
                <React.Fragment>
                  <View style={styles.activeCircle} />
                  <BaseText style={styles.txtActive}>Active</BaseText>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <View style={styles.inactiveCircle} />
                  <BaseText style={styles.txtActive}>Inactive</BaseText>
                </React.Fragment>
              )}

              <FontAwesome name="star" style={styles.starIcon} />
              <BaseText style={styles.rateText}>{rating}</BaseText>
            </View>

            <View style={styles.followContainer}>
              <BaseText style={styles.txtFollowers}>Followers</BaseText>
              <BaseText style={styles.followersValue}>{followers}</BaseText>
              <BaseText style={styles.txtFollowing}>Following</BaseText>
              <BaseText style={styles.followingValue}>{following}</BaseText>
            </View>
          </React.Fragment>
        )}

        {ButtonComponent && <View>{ButtonComponent}</View>}
      </View>
    </View>
  );
};
