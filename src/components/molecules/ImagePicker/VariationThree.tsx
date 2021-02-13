/**
 *
 * VariationThree
 * @format
 *
 */

import React, { FC, Fragment } from "react";
import { View } from "react-native";
import Icon from "@app/atoms/Icon";
import Image from "@app/atoms/Image";

import type { VariationType } from "./types";
import { SIZE } from "./config";
import ImagePickerStyle from "./styles";

const VariationThree: FC<VariationType> = (props) => {
  const { uri } = props;

  return (
    <Fragment>
      {uri ? (
        <View style={ImagePickerStyle.variationThreeContainer}>
          <Icon
            group="common"
            name="cameraWhite"
            height={SIZE.SECONDARY}
            width={SIZE.SECONDARY}
            extraStyle={ImagePickerStyle.cameraIcon}
          />
          <Image source={{ uri }} customStyle={ImagePickerStyle.image} />
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
