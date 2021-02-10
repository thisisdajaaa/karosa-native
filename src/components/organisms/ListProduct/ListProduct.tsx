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
            customStyle={ListProductStyles.image}
            resizeMode={"cover"}
          />
          <ListItem.Content style={ListProductStyles.topContainer}>
            <Text
              numberOfLines={NAME_LINES}
              text={productName}
              customStyle={ListProductStyles.txtName}
            />
            <Text
              text={`PHP ${price}`}
              customStyle={ListProductStyles.txtPrice}
            />
            <ListItem.Content style={ListProductStyles.badgeContainer}>
              {wholesale && (
                <View style={ListProductStyles.wholesaleContainer}>
                  <Text
                    text="Wholesale"
                    customStyle={ListProductStyles.txtBadge}
                  />
                </View>
              )}
              {discount && (
                <View style={ListProductStyles.discountContainer}>
                  <Text
                    text={`${discount}%`}
                    customStyle={ListProductStyles.txtBadge}
                  />
                </View>
              )}
            </ListItem.Content>
          </ListItem.Content>
        </ListItem.Content>
        <ListItem.Content style={ListProductStyles.subContainerTwo}>
          <ListItem.Content style={ListProductStyles.midContainerOne}>
            <ListItem.Content style={ListProductStyles.variationContainerOne}>
              <Text text="Stock" customStyle={ListProductStyles.txtLabel} />
              <Text
                text={String(stock)}
                customStyle={ListProductStyles.txtValue}
              />
            </ListItem.Content>
            <ListItem.Content style={ListProductStyles.variationContainerTwo}>
              <Text text="Likes" customStyle={ListProductStyles.txtLabel} />
              <Text
                text={String(likes)}
                customStyle={ListProductStyles.txtValue}
              />
            </ListItem.Content>
          </ListItem.Content>
          <ListItem.Content style={ListProductStyles.space} />
          <ListItem.Content style={ListProductStyles.midContainerTwo}>
            <ListItem.Content style={ListProductStyles.variationContainerOne}>
              <Text text="Sold" customStyle={ListProductStyles.txtLabel} />
              <Text
                text={String(sold)}
                customStyle={ListProductStyles.txtValue}
              />
            </ListItem.Content>
            <ListItem.Content style={ListProductStyles.variationContainerTwo}>
              <Text text="Rating" customStyle={ListProductStyles.txtLabel} />
              <Text
                text={String(rating)}
                customStyle={ListProductStyles.txtValue}
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
              customStyle={ListProductStyles.txtDiscontinue}
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
            <Text text="Edit" customStyle={ListProductStyles.txtEdit} />
          </TouchableOpacity>
          <View style={ListProductStyles.boostContainer}>
            <Button
              type="outline"
              title="Boost Now"
              customStyle={ListProductStyles.buttonContent}
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
