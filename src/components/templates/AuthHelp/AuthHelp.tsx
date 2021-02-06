/**
 *
 * AuthHelp
 * @format
 *
 */

import React, { FC } from "react";
import { View, Image } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import BaseText from "@app/atoms/Text";
import { Screen } from "@app/components/base-screen";
import { ListAvatar } from "@app/components/list/list-avatar";

import type { PropsType } from "./types";
import AuthHelpStyles from "./styles";

const AuthHelp: FC<PropsType> = (props: PropsType) => {
  const { phoneProps, emailProps, customStyles, header } = props;

  return (
    <Screen header={header} customStyles={customStyles}>
      <View style={AuthHelpStyles.logoContainer}>
        <Image
          style={AuthHelpStyles.logo}
          source={require("../../../../assets/logo-red.png")}
        />
      </View>

      <ListAvatar {...emailProps} />
      <ListAvatar {...phoneProps} />

      <BaseText
        text={"2020 Karosa. All rights reserved."}
        customStyle={AuthHelpStyles.footer}
      />
    </Screen>
  );
};

AuthHelp.defaultProps = {
  customStyles: AuthHelpStyles.container,
  phoneProps: {
    title: "032 456 3478",
    subTitle: "(Monday - Sunday, 9AM - 6PM)",
    IconComponent: (
      <MaterialCommunityIcons name="phone" style={AuthHelpStyles.icon} />
    ),
    style: {
      containerStyle: AuthHelpStyles.phoneContainer,
    },
  },
  emailProps: {
    title: "karosasupport@gmail.com",
    subTitle: "Responds within 1-2 days",
    style: {
      containerStyle: AuthHelpStyles.emailContainer,
    },
    IconComponent: <Ionicons name="md-mail" style={AuthHelpStyles.icon} />,
  },
};

export default AuthHelp;
