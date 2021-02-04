/**
 *
 * LoginHelp
 * @format
 *
 */

import React, { FC } from "react";
import { View, Image } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import { BaseText } from "@app/components/base-text";
import { Screen } from "@app/components/base-screen";
import { ListAvatar } from "@app/components/list/list-avatar";

import type { PropsType } from "./types";
import LoginHelpStyles from "./styles";

const LoginHelp: FC<PropsType> = (props: PropsType) => {
  const { phoneProps, emailProps, customStyles, header } = props;

  return (
    <Screen header={header} customStyles={customStyles}>
      <View style={LoginHelpStyles.logoContainer}>
        <Image
          style={LoginHelpStyles.logo}
          source={require("../../../../assets/logo-red.png")}
        />
      </View>

      <ListAvatar {...emailProps} />
      <ListAvatar {...phoneProps} />

      <BaseText style={LoginHelpStyles.footer}>
        2020 Karosa. All rights reserved.
      </BaseText>
    </Screen>
  );
};

LoginHelp.defaultProps = {
  customStyles: LoginHelpStyles.container,
  phoneProps: {
    title: "032 456 3478",
    subTitle: "(Monday - Sunday, 9AM - 6PM)",
    IconComponent: (
      <MaterialCommunityIcons name="phone" style={LoginHelpStyles.icon} />
    ),
    style: {
      containerStyle: LoginHelpStyles.phoneContainer,
    },
  },
  emailProps: {
    title: "karosasupport@gmail.com",
    subTitle: "Responds within 1-2 days",
    style: {
      containerStyle: LoginHelpStyles.emailContainer,
    },
    IconComponent: <Ionicons name="md-mail" style={LoginHelpStyles.icon} />,
  },
};

export default LoginHelp;
