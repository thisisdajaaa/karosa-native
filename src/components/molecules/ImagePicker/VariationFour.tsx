/**
 *
 * VariationFour
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
import ImagePickerStyles from "./styles";

const VariationFour: FC<VariationType> = (props) => {
  const { uri } = props;

  return (
    <Fragment>
      {uri ? (
        <View style={ImagePickerStyles.variationFourMainContainer}>
          <Icon
            group="common"
            name="cameraWhite"
            height={SIZE.PRIMARY}
            width={SIZE.PRIMARY}
            extraStyle={ImagePickerStyles.addIcon}
          />

          <Image
            source={{ uri }}
            imageStyle={ImagePickerStyles.variationFourCamera}
          />
        </View>
      ) : (
        <View style={ImagePickerStyles.variationFourSubContainer}>
          <View style={ImagePickerStyles.iconContainer}>
            <Icon
              group="products"
              name="addImage"
              height={SIZE.TERTIARY}
              width={SIZE.TERTIARY}
            />
          </View>

          <View style={ImagePickerStyles.txtContainer}>
            <Text
              text="Add Image"
              textStyle={ImagePickerStyles.txtVariationFour}
            />
          </View>
        </View>
      )}
    </Fragment>
  );
};

export default VariationFour;
