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
import { theme } from "@app/styles";

const VariationFour: FC<VariationType> = (props) => {
  const { uri } = props;

  return (
    <Fragment>
      {uri ? (
        <View
          style={{
            width: 82,
            height: 76,
            borderWidth: 0.5,
            borderStyle: "solid",
            borderColor: theme.colors.primary,
            borderRadius: 5,
            overflow: "hidden",
            position: "relative",
            justifyContent: "center",
          }}>
          <Icon
            group="common"
            name="cameraWhite"
            height={SIZE.PRIMARY}
            width={SIZE.PRIMARY}
            extraStyle={{
              position: "absolute",
              zIndex: 99,
              alignSelf: "center",
            }}
          />

          <Image
            source={{ uri }}
            imageStyle={{
              width: "100%",
              height: "100%",
              borderRadius: 5,
              resizeMode: "cover",
              opacity: 0.5,
            }}
          />
        </View>
      ) : (
        <View
          style={{
            width: 82,
            height: 76,
            borderWidth: 0.5,
            borderStyle: "solid",
            borderColor: theme.colors.primary,
            borderRadius: 5,
          }}>
          <View
            style={{
              flexGrow: 1,
              padding: 16,
              alignItems: "center",
              justifyContent: "center",
            }}>
            <Icon group="products" name="addImage" height={24} width={24} />
          </View>

          <View
            style={{
              paddingHorizontal: 8,
              paddingVertical: 2,
              backgroundColor: theme.colors.primary,
              borderBottomLeftRadius: 5,
              borderBottomRightRadius: 5,
            }}>
            <Text
              text="Add Image"
              textStyle={{
                color: theme.colors.white,
                ...theme.textLight,
              }}
            />
          </View>
        </View>
      )}
    </Fragment>
  );
};

export default VariationFour;
