/**
 *
 * ListProduct
 * @format
 *
 */

import React, { FC } from "react";
import { View, TouchableOpacity } from "react-native";
import { ListItem } from "react-native-elements";
import Button from "@app/atoms/Button";
import Text from "@app/atoms/Text";
import Icon from "@app/atoms/Icon";
import Image from "@app/atoms/Image";

import type { PropsType } from "./types";
import { IMAGE_SIZE, NAME_LINES } from "./config";
import ListProductStyles from "./styles";

const ListProduct: FC<PropsType> = (props) => {
  const {
    image,
    price,
    productName,
    wholesale,
    discount,
    stock,
    sold,
    likes,
    rating,
    onDiscontinue,
    onEdit,
    onBoost,
    hasBottomDivder,
  } = props;

  return (
    <ListItem bottomDivider={hasBottomDivder}>
      <ListItem.Content style={ListProductStyles.container}>
        <ListItem.Content style={ListProductStyles.subContainerOne}>
          <Image
            source={{ uri: image }}
            imageStyle={ListProductStyles.image}
            resizeMode={"cover"}
          />
          <ListItem.Content style={ListProductStyles.topContainer}>
            <Text
              numberOfLines={NAME_LINES}
              text={productName}
              textStyle={ListProductStyles.txtName}
            />
            <Text
              text={`PHP ${price}`}
              textStyle={ListProductStyles.txtPrice}
            />
            <ListItem.Content style={ListProductStyles.badgeContainer}>
              {wholesale && (
                <View style={ListProductStyles.wholesaleContainer}>
                  <Text
                    text="Wholesale"
                    textStyle={ListProductStyles.txtBadge}
                  />
                </View>
              )}
              {discount && (
                <View style={ListProductStyles.discountContainer}>
                  <Text
                    text={`${discount}%`}
                    textStyle={ListProductStyles.txtBadge}
                  />
                </View>
              )}
            </ListItem.Content>
          </ListItem.Content>
        </ListItem.Content>
        <ListItem.Content style={ListProductStyles.subContainerTwo}>
          <ListItem.Content style={ListProductStyles.midContainerOne}>
            <ListItem.Content style={ListProductStyles.variationContainerOne}>
              <Text text="Stock" textStyle={ListProductStyles.txtLabel} />
              <Text
                text={String(stock)}
                textStyle={ListProductStyles.txtValue}
              />
            </ListItem.Content>
            <ListItem.Content style={ListProductStyles.variationContainerTwo}>
              <Text text="Likes" textStyle={ListProductStyles.txtLabel} />
              <Text
                text={String(likes)}
                textStyle={ListProductStyles.txtValue}
              />
            </ListItem.Content>
          </ListItem.Content>
          <ListItem.Content style={ListProductStyles.space} />
          <ListItem.Content style={ListProductStyles.midContainerTwo}>
            <ListItem.Content style={ListProductStyles.variationContainerOne}>
              <Text text="Sold" textStyle={ListProductStyles.txtLabel} />
              <Text
                text={String(sold)}
                textStyle={ListProductStyles.txtValue}
              />
            </ListItem.Content>
            <ListItem.Content style={ListProductStyles.variationContainerTwo}>
              <Text text="Rating" textStyle={ListProductStyles.txtLabel} />
              <Text
                text={String(rating)}
                textStyle={ListProductStyles.txtValue}
              />
            </ListItem.Content>
          </ListItem.Content>
        </ListItem.Content>
        <ListItem.Content style={ListProductStyles.botContainer}>
          <TouchableOpacity
            style={ListProductStyles.buttonContainer}
            onPress={onDiscontinue}>
            <View style={ListProductStyles.removeIcon}>
              <Icon
                group="products"
                name="remove"
                height={IMAGE_SIZE}
                width={IMAGE_SIZE}
              />
            </View>
            <Text
              text="Discontinue"
              textStyle={ListProductStyles.txtDiscontinue}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={ListProductStyles.buttonContainer}
            onPress={onEdit}>
            <View style={ListProductStyles.editIcon}>
              <Icon
                group="products"
                name="edit"
                height={IMAGE_SIZE}
                width={IMAGE_SIZE}
              />
            </View>
            <Text text="Edit" textStyle={ListProductStyles.txtEdit} />
          </TouchableOpacity>
          <View style={ListProductStyles.boostContainer}>
            <Button
              type="outline"
              title="Boost Now"
              buttonStyle={ListProductStyles.buttonContent}
              titleStyle={ListProductStyles.txtButton}
              onPress={onBoost}
            />
          </View>
        </ListItem.Content>
      </ListItem.Content>
    </ListItem>
  );
};

export default ListProduct;
