import React from "react";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { BaseText } from "@app/components/base-text";
import { Screen } from "@app/components/base-screen";
import { ListAvatar } from "@app/components/list/list-avatar";
import { Props as ListAvatarProps } from "@app/components/list/list-avatar/types";
import { Props as ScreenProps } from "@app/components/base-screen/types";

import { styles } from "./styles";

const HelpScreen: React.FC = () => {
  const { goBack } = useNavigation();

  const screenProps: ScreenProps = {
    header: {
      iconName: "close",
      title: "Help Centre",
      borderBottom: false,
      press: {
        left: () => goBack(),
      },
    },
    customStyles: styles.container,
  };

  const emailProps: ListAvatarProps = {
    title: "karosasupport@gmail.com",
    subTitle: "Responds within 1-2 days",
    style: {
      containerStyle: styles.emailContainer,
    },
    IconComponent: <Ionicons name="md-mail" style={styles.icon} />,
  };

  const phoneProps: ListAvatarProps = {
    title: "032 456 3478",
    subTitle: "(Monday - Sunday, 9AM - 6PM)",
    IconComponent: <MaterialCommunityIcons name="phone" style={styles.icon} />,
    style: {
      containerStyle: styles.phoneContainer,
    },
  };

  return (
    <Screen {...screenProps}>
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

export default HelpScreen;
