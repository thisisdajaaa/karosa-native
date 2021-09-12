/**
 *
 * UserAccountEdit
 * @format
 *
 */

import React, { FC } from "react";
import { View } from "react-native";
import { MultiList } from "@app/organisms/MultiList";
import ListAction from "@app/organisms/ListAction";
import ListChevron from "@app/organisms/ListChevron";
import Header from "@app/molecules/Header";
import type { Props as MultiListProps } from "@app/organisms/MultiList/types";
import type { Props as ListActionProps } from "@app/organisms/ListAction/types";
import type { PropsType as ListChevronProps } from "@app/organisms/ListChevron/types";

import type { PropsType } from "./types";
import UserAccountEditStyles from "./styles";
import { theme } from "@app/styles";

const UserAccountEditTemplate: FC<PropsType> = (props) => {
  const { handleSocialMedia, goBack } = props;

  const multiListProps: MultiListProps = {
    multiDisp: [
      {
        text: {
          left: "Name",
          right: "Hinata Shoyo",
        },
        hasSeparator: true,
      },
      {
        text: {
          left: "Gender",
          right: "Male",
        },
        hasSeparator: true,
      },
      {
        text: {
          left: "Birthday",
          right: "December 30, 1997",
        },
        hasSeparator: true,
      },
      {
        text: {
          left: "Phone",
          right: "12312321",
        },
        hasSeparator: true,
      },
      {
        text: {
          left: "Email",
          right: "adannanthony@gmail.com",
        },
        hasSeparator: true,
      },
    ],
  };

  const passwordProps: ListActionProps = {
    text: {
      left: "Password",
      right: "Set Password",
    },
    action: () => 0,
  };

  const addressProps: ListChevronProps = {
    title: "Addresses",
    onPress: () => 0,
  };

  const socialMediaProps: ListChevronProps = {
    title: "Social Media Accounts",
    onPress: handleSocialMedia,
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
          text: "Edit Profile",
          style: UserAccountEditStyles.txtHeader,
        }}
      />
      <View style={UserAccountEditStyles.container}>
        <View style={UserAccountEditStyles.multiListContainer}>
          <MultiList {...multiListProps} />
          <ListAction {...passwordProps} />
        </View>

        <View style={UserAccountEditStyles.addressContainer}>
          <ListChevron {...addressProps} />
        </View>

        <View>
          <ListChevron {...socialMediaProps} />
        </View>
      </View>
    </>
  );
};

export default UserAccountEditTemplate;
