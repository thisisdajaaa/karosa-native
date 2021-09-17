import React, { FC } from "react";
import { View } from "react-native";

import { CardPropsType } from "./types";
import { cardStyles } from "./styles";
import Card from "@app/components/molecules/Card";
import Text from "@app/atoms/Text";
import Icons from "@app/atoms/Icon";
import Image from "@app/atoms/Image";
import Divider from "@app/atoms/Divider";

export const CardsComponent: FC<CardPropsType> = () => {
  const iconGroup = "orderFuillFillment";
  return (
    <Card containerStyle={cardStyles.cardContainer}>
      <View style={cardStyles.cardHeader}>
        <Icons group={iconGroup} name="store" width={16} height={14.4} />
        <Text text="Store Name" textStyle={cardStyles.headerTitle} />
        <Icons group={iconGroup} name="chevron" width={24} height={24} />
      </View>
      <View style={cardStyles.cardBody}>
        <Image
          source={require("../../../assets/images/macao.jpg")}
          imageStyle={cardStyles.imageStyle}
        />
        <View style={cardStyles.cardBodyContent}>
          <Text text="Product Name" />
          <Text text="Qty: 2" />
          <View style={cardStyles.cardBodyOrderTotal}>
            <Text text="Order Total:" />
            <Icons group={iconGroup} name="peso" width={24} height={24} />
            <Text text="300.00" textStyle={cardStyles.orderTotal} />
          </View>
        </View>
      </View>
      <Divider />
      <View style={cardStyles.cardFooter}>
        <Icons group={iconGroup} name="time" width={16} height={14.4} />
        <Text text="sample" />
        <Icons group={iconGroup} name="chevron" width={24} height={24} />
      </View>
    </Card>
  );
};
