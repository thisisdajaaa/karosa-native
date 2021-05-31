/**
 *
 * VariationThree
 * @format
 *
 */

import React, { FC, Fragment } from "react";
import { View } from "react-native";
import { isNil } from "ramda";
import Icon from "@app/atoms/Icon";
import Image from "@app/atoms/Image";

import type { VariationType } from "./types";
import { SIZE } from "./config";
import ImagePickerStyle from "./styles";

const VariationThree: FC<VariationType> = (props) => {
  const { uri } = props;

  return (
    <Fragment>
      {!isNil(uri) ? (
        <View style={ImagePickerStyle.variationThreeContainer}>
          <Icon
            group="common"
            name="cameraWhite"
            height={SIZE.SECONDARY}
            width={SIZE.SECONDARY}
            extraStyle={ImagePickerStyle.cameraIcon}
          />
          <Image
            source={{ uri }}
            imageStyle={ImagePickerStyle.image}
            resizeMode="cover"
          />
        </View>
      ) : (
        <View style={ImagePickerStyle.variationThreeContainer}>
          <Icon
            group="common"
            name="cameraGray"
            height={SIZE.SECONDARY}
            width={SIZE.SECONDARY}
          />
        </View>
      )}
    </Fragment>
  );
};

export default VariationThree;
