/**
 *
 * VariantImage
 * @format
 *
 */

import React, { FC } from "react";
import { TouchableWithoutFeedback, View } from "react-native";
import Text from "@app/atoms/Text";
import Image from "@app/atoms/Image";

import type { VariantImageProps } from "./types";
import { VariantImageStyles } from "./styles";

const VariantImage: FC<VariantImageProps> = (props) => {
  const { onPress, selected, item } = props;

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={[
          VariantImageStyles.container,
          selected && VariantImageStyles.selected,
        ]}
      >
        <View style={VariantImageStyles.wrapper}>
          <View style={VariantImageStyles.textContainer}>
            <Text text={item} textStyle={VariantImageStyles.txtItem} />
          </View>

          <Image
            imageStyle={VariantImageStyles.image}
            source={{
              uri: "https://res.cloudinary.com/dyfla7mxr/image/upload/v1614606614/karosa/hinata_dm5sdk.png",
            }}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default VariantImage;
