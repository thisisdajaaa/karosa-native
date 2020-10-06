import React from "react";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { BaseText } from "../../atoms/base-text";
import { Screen } from "../../atoms/base-screen";
import { ListAvatar } from "../../atoms/list/list-avatar";
import { Header } from "../../header";
import { Props as ListAvatarProps } from "../../atoms/list/list-avatar/types";
import { Props as HeaderProps } from "../../header/types";

import { styles } from "./styles";

const Help: React.FC = () => {
  const { goBack } = useNavigation();

  const headerProps: HeaderProps = {
    iconName: "close",
    title: "Help Centre",
    press: {
      left: () => goBack(),
    },
  };

  const emailProps: ListAvatarProps = {
    title: "karosasupport@gmail.com",
    subTitle: "Responds within 1-2 days",
    style: {
      containerStyle: {
        marginLeft: 2,
      },
    },
    IconComponent: (
      <Ionicons
        name="md-mail"
        size={24}
        style={{ marginBottom: 12 }}
        color="#0AA351"
      />
    ),
  };

  const phoneProps: ListAvatarProps = {
    title: "032 456 3478",
    subTitle: "(Monday - Sunday, 9AM - 6PM)",
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
    <Screen customStyles={styles.container}>
      <Header {...headerProps} />
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../../../../assets/logo-red.png")}
        />
      </View>

      <ListAvatar {...emailProps} />
      <ListAvatar {...phoneProps} />

      <BaseText style={styles.footer}>
        2020 Karosa. All rights reserved.
      </BaseText>
    </Screen>
  );
};

export default Help;
