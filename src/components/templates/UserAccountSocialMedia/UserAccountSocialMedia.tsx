/**
 *
 * UserAccountSocialMedia
 * @format
 *
 */

import React, { FC } from "react";
import { View } from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { MultiList } from "@app/organisms/MultiList";
import Header from "@app/molecules/Header";
import { theme } from "@app/styles";
import type { Props as MultiListProps } from "@app/organisms/MultiList/types";

import type { PropsType } from "./types";
import UserAccountSocialMediaStyles from "./styles";

const UserAccountSocialMediaTemplate: FC<PropsType> = (props) => {
  const { goBack } = props;

  const multiListProps: MultiListProps = {
    multiAction: [
      {
        action: () => 0,
        text: {
          left: "Facebook",
          right: "LINK",
        },
        icon: {
          left: (
            <AntDesign
              name="facebook-square"
              style={UserAccountSocialMediaStyles.fbLogo}
            />
          ),
        },
        style: {
          textStyle: {
            left: UserAccountSocialMediaStyles.txtLogo,
          },
        },
        hasSeparator: true,
      },
      {
        text: {
          left: "Instagram",
          right: "LINK",
        },
        image: require("../../../../assets/insta.png"),
        action: () => 0,
        hasSeparator: true,
      },
      {
        action: () => 0,
        text: {
          left: "Twitter",
          right: "LINK",
        },
        icon: {
          left: (
            <FontAwesome
              name="twitter-square"
              style={UserAccountSocialMediaStyles.twitterLogo}
            />
          ),
        },
        style: {
          textStyle: {
            left: UserAccountSocialMediaStyles.txtLogo,
          },
        },
        hasSeparator: true,
      },
    ],
  };

  return (
    <>
      <Header
        hasBottomDivider
        leftComponent={{
          icon: "arrow-back",
          color: theme.colors.primary,
          onPress: goBack,
        }}
        centerComponent={{
          text: "Social Media Accounts",
          style: UserAccountSocialMediaStyles.txtHeader,
        }}
      />
      <View style={UserAccountSocialMediaStyles.multiListContainer}>
        <MultiList {...multiListProps} />
      </View>
    </>
  );
};

export default UserAccountSocialMediaTemplate;
