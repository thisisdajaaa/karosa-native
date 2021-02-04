/**
 *
 * VariationOne
 * @format
 *
 */

import React, { FC, Fragment } from "react";
import Icon from "@app/atoms/Icon";
import Image from "@app/atoms/Image";
import Text from "@app/atoms/Text";

import { primarySize } from "./config";
import type { VariationType } from "./types";
import ImagePickerStyle from "./styles";
import { View } from "react-native";

const VariationOne: FC<VariationType> = (props) => {
  const { uri } = props;

  return (
    <Fragment>
      {uri ? (
        <View style={ImagePickerStyle.variationOneContainer}>
          <Icon
            group="common"
            name="cameraWhite"
            height={primarySize}
            width={primarySize}
            extraStyle={ImagePickerStyle.cameraIcon}
          />
          <Image source={{ uri }} customStyle={ImagePickerStyle.image} />
        </View>
      ) : (
        <View style={ImagePickerStyle.variationOneContainer}>
          <Icon
            group="common"
            name="cameraGray"
            height={primarySize}
            width={primarySize}
          />
          <Text text={"+ Add Photo"} customStyle={ImagePickerStyle.txtAddImg} />
        </View>
      )}
    </Fragment>
  );
};

export default VariationOne;
