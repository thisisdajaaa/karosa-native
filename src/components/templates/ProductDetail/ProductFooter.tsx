/**
 *
 * ProductFooter
 * @format
 *
 */

import React, { FC } from "react";
import { View } from "react-native";
import { noop } from "lodash";
import { ListItem } from "react-native-elements";
import Button from "@app/atoms/Button";
import Icon from "@app/atoms/Icon";
import Text from "@app/atoms/Text";

import { ProductFooterStyles } from "./styles";

const ProductFooter: FC = () => {
  return (
    <View style={ProductFooterStyles.container}>
      <ListItem containerStyle={ProductFooterStyles.listContainer}>
        <View style={ProductFooterStyles.leftContainer}>
          <Icon
            name="chatNow"
            group="products"
            height={20}
            width={20}
            extraStyle={ProductFooterStyles.chat}
          />
          <Text text="Chat" textStyle={ProductFooterStyles.txtChat} />
        </View>

        <Button
          title="Add to Basket"
          onPress={noop}
          buttonStyle={ProductFooterStyles.btnAddBasket}
          titleStyle={ProductFooterStyles.txtAddBasket}
        />
        <Button
          title="Buy Now"
          onPress={noop}
          buttonStyle={ProductFooterStyles.btnBuyNow}
          titleStyle={ProductFooterStyles.txtBuyNow}
        />
      </ListItem>
    </View>
  );
};

export default ProductFooter;
