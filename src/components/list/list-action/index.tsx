import React from "react";
import { View, Image, TouchableOpacity } from "react-native";

import { BaseText } from "../../base-text";

import { Props } from "./types";
import { styles } from "./styles";

export const ListAction: React.FC<Props> = ({
  text,
  image,
  icon,
  style,
  action,
  onClick,
  structure,
}) => {
  return (
    <React.Fragment>
      {onClick ? (
        <TouchableOpacity onPress={onClick}>
          <View style={[styles.container, style?.containerStyle]}>
            <View style={styles.leftContainer}>{structure?.LeftComponent}</View>
            {structure?.RightComponent}
          </View>
        </TouchableOpacity>
      ) : (
        <View style={[styles.container, style?.containerStyle]}>
          {icon?.left}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.leftContainer}>
            <BaseText
              customStyles={
                image ? styles.hasImage : [styles.left, style?.textStyle?.left]
              }
              numberOfLines={1}
            >
              {text?.left}
            </BaseText>
          </View>

          {action && (
            <TouchableOpacity onPress={action}>
              {text?.right && (
                <BaseText style={[styles.right, style?.textStyle?.right]}>
                  {text?.right}
                </BaseText>
              )}
              {icon?.right}
            </TouchableOpacity>
          )}

          {structure?.RightComponent}
        </View>
      )}
    </React.Fragment>
  );
};
