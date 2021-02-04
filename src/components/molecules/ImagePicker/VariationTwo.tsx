/**
 *
 * VariationTwo
 * @format
 *
 */

import React, { FC, Fragment } from "react";
import Icon from "@app/atoms/Icon";
import Image from "@app/atoms/Image";

import { secondarySize } from "./config";
import type { VariationType } from "./types";
import ImagePickerStyle from "./styles";
import { View } from "react-native";

const VariationTwo: FC<VariationType> = (props) => {
  const { uri } = props;

  return (
    <Fragment>
      {uri ? (
        <View style={ImagePickerStyle.variationTwoContainer}>
          <Icon
            group="common"
            name="cameraWhite"
            height={secondarySize}
            width={secondarySize}
            extraStyle={ImagePickerStyle.cameraIcon}
          />
          <Image source={{ uri }} customStyle={ImagePickerStyle.image} />
        </View>
      ) : (
        <View style={ImagePickerStyle.variationTwoContainer}>
          <Icon
            group="common"
            name="cameraGray"
            height={secondarySize}
            width={secondarySize}
          />
        </View>
      )}
    </Fragment>
  );
};

export default VariationTwo;
