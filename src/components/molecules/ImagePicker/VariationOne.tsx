/**
 *
 * VariationOne
 * @format
 *
 */

import React, { FC, Fragment } from "react";
import { View } from "react-native";
import Icon from "@app/atoms/Icon";
import Image from "@app/atoms/Image";
import Text from "@app/atoms/Text";

import type { VariationType } from "./types";
import { SIZE } from "./config";
import ImagePickerStyle from "./styles";

const VariationOne: FC<VariationType> = (props) => {
  const { uri } = props;

  return (
    <Fragment>
      {uri ? (
        <View style={ImagePickerStyle.variationOneContainer}>
          <Icon
            group="common"
            name="cameraWhite"
            height={SIZE.PRIMARY}
            width={SIZE.PRIMARY}
            extraStyle={ImagePickerStyle.cameraIcon}
          />
          <Image
            source={{ uri }}
            imageStyle={ImagePickerStyle.image}
            resizeMode="contain"
          />
        </View>
      ) : (
        <View style={ImagePickerStyle.variationOneContainer}>
          <Icon
            group="common"
            name="cameraGreen"
            height={SIZE.PRIMARY}
            width={SIZE.PRIMARY}
          />
          <Text text={"Add Photo"} textStyle={ImagePickerStyle.txtAddImg} />
        </View>
      )}
    </Fragment>
  );
};

export default VariationOne;
