/**
 *
 * ProductImages
 * @format
 *
 */

import React, { FC } from "react";
import { ListItem } from "react-native-elements";
import Text from "@app/atoms/Text";

import { FlatList, TouchableWithoutFeedback, View } from "react-native";
import Icon from "@app/atoms/Icon";
import { DIMENS, theme } from "@app/styles";
import { useFormikContext } from "formik";
import { ProductForm } from "@app/redux/shop/models";
import Image from "@app/atoms/Image";
import {
  checkPermission,
  selectImage,
} from "@app/molecules/ImagePicker/config";
import { isEmpty } from "ramda";

const ProductImages: FC = () => {
  const { setFieldValue, values } = useFormikContext<ProductForm>();

  const keyExtractor = React.useCallback((_, key) => key.toString(), []);

  const handleImagePicker = (uri: string) => {
    const clonedImages = [...values.productImages];

    const newImages = [...clonedImages, uri];
    setFieldValue("productImages", newImages);
  };

  React.useEffect(() => {
    checkPermission();
  }, []);

  return (
    <ListItem bottomDivider>
      <View
        style={{
          backgroundColor: theme.colors.white,
          alignItems: "flex-start",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-start",
            }}
          >
            {values.productImages.length < 3 &&
              values.productImages.map((image, index) => (
                <View
                  key={index}
                  style={{
                    alignItems: "center",
                    marginRight: 4,
                    borderRadius: 5,
                    height: DIMENS.screenHeight * 0.12,
                    justifyContent: "center",
                    overflow: "hidden",
                    width: DIMENS.screenWidth * 0.22,
                  }}
                >
                  <Image
                    source={{ uri: image }}
                    imageStyle={{
                      width: DIMENS.screenWidth,
                      height: "100%",
                    }}
                    resizeMode="contain"
                  />
                </View>
              ))}
          </View>

          {!isEmpty(values.productImages) && values.productImages.length >= 3 && (
            <FlatList
              keyExtractor={keyExtractor}
              data={values.productImages}
              horizontal
              style={{ width: 250 }}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => (
                <View
                  style={{
                    alignItems: "center",
                    marginRight: 4,
                    borderRadius: 5,
                    height: DIMENS.screenHeight * 0.12,
                    justifyContent: "center",
                    overflow: "hidden",
                    width: DIMENS.screenWidth * 0.22,
                  }}
                >
                  <Image
                    key={index}
                    source={{ uri: item }}
                    imageStyle={{
                      width: DIMENS.screenWidth,
                      height: "100%",
                    }}
                    resizeMode="contain"
                  />
                </View>
              )}
            />
          )}

          <TouchableWithoutFeedback
            onPress={() => selectImage(handleImagePicker)}
          >
            <View
              style={{
                alignItems: "center",
                backgroundColor: theme.colors.light15,
                marginLeft: !isEmpty(values.productImages) ? 4 : 0,
                borderRadius: 5,
                borderColor: theme.colors.dark10,
                height: DIMENS.screenHeight * 0.12,
                justifyContent: "center",
                overflow: "hidden",
                width: DIMENS.screenWidth * 0.22,
              }}
            >
              <Icon group="common" name="cameraGreen" height={28} width={28} />
              <Text
                text="Add Photo"
                textStyle={{
                  ...theme.textSmall,
                  textAlign: "center",
                  fontWeight: "300",
                  color: theme.colors.black,
                }}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </ListItem>
  );
};

export default ProductImages;
