/**
 *
 * ProductImages
 * @format
 *
 */

import React, { FC } from "react";
import { isEmpty } from "lodash";
import { ListItem } from "react-native-elements";
import { useFormikContext } from "formik";
import { FlatList, TouchableWithoutFeedback, View } from "react-native";
import { ProductForm } from "@app/redux/shop/models";
import { useMount } from "@app/hooks";
import {
  checkPermission,
  selectImage,
} from "@app/molecules/ImagePicker/config";
import Image from "@app/atoms/Image";
import Text from "@app/atoms/Text";
import Icon from "@app/atoms/Icon";

import ProductNewStyles, { multipleImage } from "./styles";
import { ICON_SIZE, IMAGES_LENGTH_BASIS } from "./config";

const ProductImages: FC = () => {
  const { setFieldValue, values } = useFormikContext<ProductForm>();

  const keyExtractor = React.useCallback((_, key) => key.toString(), []);

  const handleImagePicker = (uri: string) => {
    const clonedImages = [...values.productImages];

    const newImages = [...clonedImages, uri];
    setFieldValue("productImages", newImages);
  };

  useMount(checkPermission);

  const { container } = multipleImage(values.productImages);

  return (
    <ListItem bottomDivider>
      <View style={ProductNewStyles.imagesContainer}>
        <View style={ProductNewStyles.rowFlex}>
          <View style={ProductNewStyles.rowFlex}>
            {values.productImages.length < IMAGES_LENGTH_BASIS &&
              values.productImages.map((image, index) => (
                <View key={index} style={ProductNewStyles.imageContainer}>
                  <Image
                    source={{ uri: image }}
                    imageStyle={ProductNewStyles.image}
                    resizeMode="contain"
                  />
                </View>
              ))}
          </View>

          {!isEmpty(values.productImages) &&
            values.productImages.length >= IMAGES_LENGTH_BASIS && (
              <FlatList
                keyExtractor={keyExtractor}
                data={values.productImages}
                horizontal
                style={ProductNewStyles.listWidth}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                  <View style={ProductNewStyles.imageContainer}>
                    <Image
                      key={index}
                      source={{ uri: item }}
                      imageStyle={ProductNewStyles.image}
                      resizeMode="contain"
                    />
                  </View>
                )}
              />
            )}

          <TouchableWithoutFeedback
            onPress={() => selectImage(handleImagePicker)}
          >
            <View style={container}>
              <Icon
                group="common"
                name="cameraGreen"
                height={ICON_SIZE}
                width={ICON_SIZE}
              />
              <Text text="Add Photo" textStyle={ProductNewStyles.txtAdd} />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </ListItem>
  );
};

export default ProductImages;
