import React from "react";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { View, Image } from "react-native";

import { ListItem } from "../../atoms/list";
import { BaseText } from "../../atoms/base-text";
import { Props as ListItemProps } from "../../atoms/list/types";
import { Header } from "../../header";

import { styles } from "./styles";

const Help: React.FC = () => {
  const emailProps: ListItemProps = {
    title: "karosasupport@gmail.com",
    subTitle: "Responsds within 1-2 days",
    customStyles: { marginLeft: 3 },
    IconComponent: (
      <Ionicons
        name="md-mail"
        size={24}
        style={{ marginBottom: 12 }}
        color="#0AA351"
      />
    ),
  };

  const phoneProps: ListItemProps = {
    title: "032 456 3478",
    subTitle: "(Monday - Sunday, 9AM - 6PM)",
    customStyles: { marginRight: 2 },
    IconComponent: (
      <MaterialCommunityIcons
        name="phone"
        style={{ marginBottom: 12 }}
        size={24}
        color="#0AA351"
      />
    ),
  };

  return (
    <>
      <Header iconName={"close"} title={"Help Centre"} />
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../../../../assets/logo-red.png")}
          />
        </View>

        <ListItem {...emailProps} />
        <ListItem {...phoneProps} />

        <BaseText style={styles.footer}>
          2020 Karosa. All rights reserved.
        </BaseText>
      </View>
    </>
  );
};

export default Help;
