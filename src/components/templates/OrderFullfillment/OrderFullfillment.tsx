/**
 *
 * OrderFullfillmentTemplate
 * @format
 *
 */

import React, { FC, useState } from "react";
// import { useNavigation } from "@react-navigation/native";
import { View, SafeAreaView, ScrollView } from "react-native";
import type { PropsType, CardPropsType } from "./types";
import { styles } from "./styles";
import { getPlatform } from "@app/utils";
import Icons from "@app/atoms/Icon";
import Text from "@app/atoms/Text";
import Button from "@app/atoms/Button";
import { PropsType as buttonProps } from "@app/atoms/Button/types";
import ButtonGroup from "@app/atoms/ButtonGroup";
import { PropsType as btnGroupProps } from "@app/atoms/ButtonGroup/types";
import { theme } from "@app/styles";
import { CardsComponent } from "./Cards";
import Badge from "@app/atoms/Badge";
import { ButtonGroupContent } from "./ButtonGroupContent";

const OrderFullfillmentTemplate: FC<PropsType> = () => {
  // const { goBack } = useNavigation();
  const [selectedIndex, setSelectedIndex] = useState<number>(0); // For Button Group
  const [selectedButton, setSelectedButton] = useState<number>(0); // For Buttons

  const buttonArray = [
    <ButtonGroupContent
      text="my purchases"
      textStyle={
        selectedIndex === 0
          ? styles.buttonGroupActive
          : styles.buttonGroupInActive
      }
      value="5"
      isActive={selectedIndex === 0}
    />,
    <ButtonGroupContent
      text="my shop orders"
      value="5"
      textStyle={
        selectedIndex === 1
          ? styles.buttonGroupActive
          : styles.buttonGroupInActive
      }
      isActive={selectedIndex === 1}
    />,
  ];

  const grpBtnPress = (args: number) => {
    setSelectedIndex(args);
  };
  const btnGroup: btnGroupProps = {
    selectedIndex: selectedIndex,
    buttons: buttonArray,
    onPress: grpBtnPress,
  };
  const isIOS = getPlatform.getInstance() === "ios";
  const headerContent = (
    <React.Fragment>
      <View style={styles.headerTopNavigation}>
        <Icons
          group="orderFuillFillment"
          name="greenBack"
          width={24}
          height={24}
        />
        <Text text="My Orders" textStyle={styles.textHeader} />
        <Icons
          group="orderFuillFillment"
          name="greenMessage"
          width={20}
          height={20}
        />
      </View>
      <View style={styles.buttonGroupContainer}>
        <ButtonGroup {...btnGroup} />
      </View>
    </React.Fragment>
  );

  const header = isIOS ? (
    <SafeAreaView style={styles.headerContainer}>{headerContent}</SafeAreaView>
  ) : (
    <View style={styles.headerContainer}>{headerContent}</View>
  );

  const defaultButtonStyle = (
    currIndex: number,
    selectedIndex: number,
    lastIndex: number
  ): PropsType => {
    const isSelected = currIndex === selectedIndex;
    const isLastIndex = currIndex === lastIndex;
    const { primary, light15, black, white } = theme.colors;
    const iconNames = ["Wallet", "Ship", "Box"];
    const textColor = isSelected ? "white" : "green";
    const iconColor = isSelected ? primary : light15;

    return {
      buttonStyle: {
        width: "auto",
        height: 36,
        backgroundColor: iconColor,
      },
      containerStyle: { marginRight: isLastIndex ? 0 : 10 },
      titleStyle: {
        textTransform: "capitalize",
        color: isSelected ? white : black,
      },
      icon: (
        <Icons
          group="orderFuillFillment"
          name={`${textColor}${iconNames[currIndex]}`}
          width={20}
          height={20}
          extraStyle={styles.iconMargin}
        />
      ),
      onPress: () => setSelectedButton(currIndex),
    };
  };

  const buttons: buttonProps[] = [
    { title: "for confimation" },
    { title: "to ship" },
    { title: "to receive" },
    { title: "completed" },
    { title: "cancelled" },
  ];

  const dummyData: CardPropsType[] = [
    {
      actionItem: "confirmation",
      productName: "Tuslob Buwa",
      quantity: 3,
      storeName: "Sari Sari Store",
      total: 500,
      imageUrl: require("../../../assets/images/macao.jpg"),
    },
    {
      actionItem: "confirmation",
      productName: "Guava",
      quantity: 34,
      storeName: "Sari Sari Store",
      total: 49,
      imageUrl: require("../../../assets/images/macao.jpg"),
    },
    {
      actionItem: "confirmation",
      productName: "Mango",
      quantity: 2,
      storeName: "Sari Sari Store",
      total: 12,
      imageUrl: require("../../../assets/images/macao.jpg"),
    },
  ];

  const rendereButtons = buttons.map((button, index) => (
    <View key={index}>
      {index < 2 && (
        <Badge status="error" containerStyle={styles.buttonsBadge} />
      )}

      <Button
        {...button}
        {...defaultButtonStyle(index, selectedButton, buttons.length - 1)}
      />
    </View>
  ));

  return (
    <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={false}>
      {header}
      <View>
        <ScrollView horizontal contentContainerStyle={styles.buttonsContainer}>
          {rendereButtons}
        </ScrollView>
        <View style={styles.cardContainer}>
          {dummyData.map((card, index) => (
            <CardsComponent {...card} key={index} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default OrderFullfillmentTemplate;
