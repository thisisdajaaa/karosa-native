import React, { FC } from "react";
import { View } from "react-native";

import { CardPropsType } from "./types";
import { cardStyles } from "./styles";
import Card from "@app/components/molecules/Card";
import Text from "@app/atoms/Text";
import Icons from "@app/atoms/Icon";
import Image from "@app/atoms/Image";
import Divider from "@app/atoms/Divider";
import Button from "@app/atoms/Button";

export const CardsComponent: FC<CardPropsType> = ({
  storeName,
  productName,
  quantity,
  actionItem,
  total,
  imageUrl,
}) => {
  const iconGroup = "orderFuillFillment";

  const getFooterDetails = (actionItem: string) => {
    let footerDetails = {
      icon: "time",
      subtext: "",
      btnText: "Cancel",
    };

    switch (actionItem) {
      case "confirmation":
        return (footerDetails = {
          ...footerDetails,
          subtext: "Awaiting confirmation",
        });
      case "ship":
        return (footerDetails = {
          icon: "fast-ship",
          subtext: "Parcel is out for delivery",
          btnText: "Track your order",
        });
      case "completed":
        return (footerDetails = {
          icon: "parcel",
          subtext: "Parcel has been delivered",
          btnText: "Buy Again",
        });
      default:
        return footerDetails;
    }
  };

  const footerDetail = getFooterDetails(actionItem);

  return (
    <Card containerStyle={cardStyles.cardContainer}>
      <View style={cardStyles.cardHeader}>
        <Icons group={iconGroup} name="store" width={16} height={14.4} />
        <Text text={storeName} textStyle={cardStyles.headerTitle} />
        <Icons group={iconGroup} name="chevron" width={24} height={24} />
      </View>
      <View style={cardStyles.cardBody}>
        <Image source={imageUrl} imageStyle={cardStyles.imageStyle} />
        <View style={cardStyles.cardBodyContent}>
          <Text text={productName} textStyle={cardStyles.productName} />
          <Text text={`Qty: ${quantity}`} />
          <View style={cardStyles.cardBodyOrderTotal}>
            <Text text="Order Total:" textStyle={cardStyles.orderTotalText} />
            <Icons group={iconGroup} name="peso" width={12} height={15} />
            <Text
              text={total.toFixed(2).toString()}
              textStyle={cardStyles.orderTotalAmount}
            />
          </View>
        </View>
      </View>
      <Divider />
      <View style={cardStyles.cardFooter}>
        <View style={cardStyles.cardFooterTextContent}>
          <Button
            title={
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text text={footerDetail.subtext} />
                <Icons
                  group={iconGroup}
                  name="chevron"
                  width={24}
                  height={24}
                />
              </View>
            }
            icon={
              <Icons
                group={iconGroup}
                name={footerDetail.icon}
                width={16}
                height={14.4}
              />
            }
            buttonStyle={[
              cardStyles.cardFooterButton,
              cardStyles.cardFooterButtonLeft,
            ]}
            titleStyle={cardStyles.cardFooterSubText}
            type="clear"
          />
        </View>
        <Button
          title={footerDetail.btnText}
          buttonStyle={cardStyles.cardFooterButton}
        />
      </View>
    </Card>
  );
};
