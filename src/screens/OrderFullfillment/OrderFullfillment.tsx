/**
 *
 * OrderFullfillment
 * @format
 *
 */

import React, { FC, useState } from "react";
// import { useNavigation } from "@react-navigation/native";
import { View, SafeAreaView, ScrollView } from "react-native";
import type { PropsType } from "./types";
import { styles } from "./styles";
import { getPlatform } from "@app/utils";
import Icons from "@app/atoms/Icon";
import Text from "@app/atoms/Text";
import Button from "@app/atoms/Button";
import { PropsType as buttonProps } from "@app/atoms/Button/types";
import ButtonGroup from "@app/atoms/ButtonGroup";
import { PropsType as btnGroupProps } from "@app/atoms/ButtonGroup/types";
import { theme } from "@app/styles";

const OrderFullfillment: FC<PropsType> = () => {
  // const { goBack } = useNavigation();
  const [selectedIndex, setSelectedIndex] = useState<number>(0); // For Button Group
  const [selectedButton, setSelectedButton] = useState<number>(0); // For Buttons

  const buttonArray = ["My Purchases", "My Shop Orders"];
  const btnPress = (args: any) => {
    setSelectedIndex(args);
  };
  const btnGroup: btnGroupProps = {
    selected: selectedIndex,
    buttons: buttonArray,
    onPress: btnPress,
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

  const defaultButtonStyle: PropsType = {
    buttonStyle: {
      width: "auto",
      height: 36,
      backgroundColor: theme.colors.light15,
    },
    containerStyle: { marginRight: 10 },
    titleStyle: { textTransform: "capitalize", color: theme.colors.black },
  };
  const buttons: buttonProps[] = [
    {
      title: "for confimation",
      icon: (
        <Icons
          group="orderFuillFillment"
          name="greenWallet"
          width={20}
          height={20}
          extraStyle={{ marginRight: 10 }}
        />
      ),
      ...defaultButtonStyle,
    },
    { title: "to ship", ...defaultButtonStyle },
    { title: "to receive", ...defaultButtonStyle },
    { title: "completed", ...defaultButtonStyle },
    {
      title: "cancelled",
      ...defaultButtonStyle,
    },
  ];

  const rendereButtons = buttons.map((button, index) => (
    <Button {...button} key={index} />
  ));

  return (
    <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={false}>
      {header}
      <View>
        <ScrollView style={styles.buttonsContainer} horizontal>
          {rendereButtons}
        </ScrollView>
        <Text
          text="asdlfkajsdflkasdjflaskjdf"
          textStyle={{ fontSize: 30 }}
          numberOfLines={3}
        />
        <Text
          text="asdlfkajsdflkasdjflaskjdf"
          textStyle={{ fontSize: 30 }}
          numberOfLines={3}
        />
        <Text
          text="asdlfkajsdflkasdjflaskjdf"
          textStyle={{ fontSize: 30 }}
          numberOfLines={3}
        />
        <Text
          text="asdlfkajsdflkasdjflaskjdf"
          textStyle={{ fontSize: 30 }}
          numberOfLines={3}
        />
        <Text
          text="asdlfkajsdflkasdjflaskjdf"
          textStyle={{ fontSize: 30 }}
          numberOfLines={3}
        />
        <Text
          text="asdlfkajsdflkasdjflaskjdf"
          textStyle={{ fontSize: 30 }}
          numberOfLines={3}
        />
        <Text
          text="asdlfkajsdflkasdjflaskjdf"
          textStyle={{ fontSize: 30 }}
          numberOfLines={3}
        />
        <Text
          text="asdlfkajsdflkasdjflaskjdf"
          textStyle={{ fontSize: 30 }}
          numberOfLines={3}
        />
        <Text
          text="asdlfkajsdflkasdjflaskjdf"
          textStyle={{ fontSize: 30 }}
          numberOfLines={3}
        />
        <Text
          text="asdlfkajsdflkasdjflaskjdf"
          textStyle={{ fontSize: 30 }}
          numberOfLines={3}
        />
        <Text
          text="asdlfkajsdflkasdjflaskjdf"
          textStyle={{ fontSize: 30 }}
          numberOfLines={3}
        />
        <Text
          text="asdlfkajsdflkasdjflaskjdf"
          textStyle={{ fontSize: 30 }}
          numberOfLines={3}
        />
        <Text
          text="asdlfkajsdflkasdjflaskjdf"
          textStyle={{ fontSize: 30 }}
          numberOfLines={3}
        />
        <Text
          text="asdlfkajsdflkasdjflaskjdf"
          textStyle={{ fontSize: 30 }}
          numberOfLines={3}
        />
        <Text
          text="asdlfkajsdflkasdjflaskjdf"
          textStyle={{ fontSize: 30 }}
          numberOfLines={3}
        />
        <Text
          text="asdlfkajsdflkasdjflaskjdf"
          textStyle={{ fontSize: 30 }}
          numberOfLines={3}
        />
        <Text
          text="asdlfkajsdflkasdjflaskjdf"
          textStyle={{ fontSize: 30 }}
          numberOfLines={3}
        />
        <Text
          text="asdlfkajsdflkasdjflaskjdf"
          textStyle={{ fontSize: 30 }}
          numberOfLines={3}
        />
        <Text
          text="asdlfkajsdflkasdjflaskjdf"
          textStyle={{ fontSize: 30 }}
          numberOfLines={3}
        />
        <Text
          text="asdlfkajsdflkasdjflaskjdf"
          textStyle={{ fontSize: 30 }}
          numberOfLines={3}
        />
        <Text
          text="asdlfkajsdflkasdjflaskjdf"
          textStyle={{ fontSize: 30 }}
          numberOfLines={3}
        />
        <Text
          text="asdlfkajsdflkasdjflaskjdf"
          textStyle={{ fontSize: 30 }}
          numberOfLines={3}
        />
        <Text
          text="asdlfkajsdflkasdjflaskjdf"
          textStyle={{ fontSize: 30 }}
          numberOfLines={3}
        />
        <Text
          text="asdlfkajsdflkasdjflaskjdf"
          textStyle={{ fontSize: 30 }}
          numberOfLines={3}
        />
        <Text
          text="asdlfkajsdflkasdjflaskjdf"
          textStyle={{ fontSize: 30 }}
          numberOfLines={3}
        />
        <Text
          text="asdlfkajsdflkasdjflaskjdf"
          textStyle={{ fontSize: 30 }}
          numberOfLines={3}
        />
        <Text
          text="asdlfkajsdflkasdjflaskjdf"
          textStyle={{ fontSize: 30 }}
          numberOfLines={3}
        />
        <Text
          text="asdlfkajsdflkasdjflaskjdf"
          textStyle={{ fontSize: 30 }}
          numberOfLines={3}
        />
        <Text
          text="asdlfkajsdflkasdjflaskjdf"
          textStyle={{ fontSize: 30 }}
          numberOfLines={3}
        />
        <Text
          text="asdlfkajsdflkasdjflaskjdf"
          textStyle={{ fontSize: 30 }}
          numberOfLines={3}
        />
        <Text
          text="asdlfkajsdflkasdjflaskjdf"
          textStyle={{ fontSize: 30 }}
          numberOfLines={3}
        />
        <Text
          text="asdlfkajsdflkasdjflaskjdf"
          textStyle={{ fontSize: 30 }}
          numberOfLines={3}
        />
        <Text
          text="asdlfkajsdflkasdjflaskjdf"
          textStyle={{ fontSize: 30 }}
          numberOfLines={3}
        />
        <Text
          text="asdlfkajsdflkasdjflaskjdf"
          textStyle={{ fontSize: 30 }}
          numberOfLines={3}
        />
        <Text
          text="asdlfkajsdflkasdjflaskjdf"
          textStyle={{ fontSize: 30 }}
          numberOfLines={3}
        />
        <Text
          text="asdlfkajsdflkasdjflaskjdf"
          textStyle={{ fontSize: 30 }}
          numberOfLines={3}
        />
        <Text
          text="asdlfkajsdflkasdjflaskjdf"
          textStyle={{ fontSize: 30 }}
          numberOfLines={3}
        />
        <Text
          text="asdlfkajsdflkasdjflaskjdf"
          textStyle={{ fontSize: 30 }}
          numberOfLines={3}
        />
        <Text
          text="asdlfkajsdflkasdjflaskjdf"
          textStyle={{ fontSize: 30 }}
          numberOfLines={3}
        />
        <Text
          text="asdlfkajsdflkasdjflaskjdf"
          textStyle={{ fontSize: 30 }}
          numberOfLines={3}
        />
        <Text
          text="asdlfkajsdflkasdjflaskjdf"
          textStyle={{ fontSize: 30 }}
          numberOfLines={3}
        />
        <Text
          text="asdlfkajsdflkasdjflaskjdf"
          textStyle={{ fontSize: 30 }}
          numberOfLines={3}
        />
        <Text
          text="asdlfkajsdflkasdjflaskjdf"
          textStyle={{ fontSize: 30 }}
          numberOfLines={3}
        />
        <Text
          text="asdlfkajsdflkasdjflaskjdf"
          textStyle={{ fontSize: 30 }}
          numberOfLines={3}
        />
        <Text
          text="asdlfkajsdflkasdjflaskjdf"
          textStyle={{ fontSize: 30 }}
          numberOfLines={3}
        />
        <Text
          text="asdlfkajsdflkasdjflaskjdf"
          textStyle={{ fontSize: 30 }}
          numberOfLines={3}
        />
        <Text
          text="asdlfkajsdflkasdjflaskjdf"
          textStyle={{ fontSize: 30 }}
          numberOfLines={3}
        />
        <Text
          text="asdlfkajsdflkasdjflaskjdf"
          textStyle={{ fontSize: 30 }}
          numberOfLines={3}
        />
        <Text
          text="asdlfkajsdflkasdjflaskjdf"
          textStyle={{ fontSize: 30 }}
          numberOfLines={3}
        />
      </View>
    </ScrollView>
  );
};

export default OrderFullfillment;
