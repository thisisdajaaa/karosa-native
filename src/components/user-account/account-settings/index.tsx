import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Screen } from "../../atoms/base-screen";
import { MultiList } from "../../atoms/multi-list";
import { AppButton } from "../../atoms/button";
import { Props as ButtonProps } from "../../atoms/button/types";
import { Props as MultiListProps } from "../../atoms/multi-list/types";
import { Props as ScreenProps } from "../../atoms/base-screen/types";

import { styles } from "./styles";

const AccountSettings: React.FC = () => {
  const { goBack } = useNavigation();

  const screenProps: ScreenProps = {
    header: {
      iconName: "arrow-back",
      title: "Account Settings",
      press: {
        left: () => goBack(),
      },
    },
    customStyles: styles.container,
  };

  const multiListProps: MultiListProps = {
    listItem: [
      {
        title: "My Profile",
        hasSeparator: true,
      },
      {
        title: "Help Centre",
        hasSeparator: true,
      },
      {
        title: "Request for Account Deletion",
        hasSeparator: true,
      },
      {
        title: "FAQ",
        hasSeparator: true,
      },
      {
        title: "Privacy Policy",
        hasSeparator: true,
      },
      {
        title: "About",
      },
    ],
    hasChevron: true,
  };

  const logoutButtonProps: ButtonProps = {
    onPress: () => console.log("logout"),
    title: "Logout",
    containerStyle: {
      backgroundColor: "#ECECEC",
      minWidth: 330,
      width: "100%",
    },
    textStyle: {
      color: "#1C1C1C",
    },
  };

  return (
    <Screen {...screenProps}>
      <View style={styles.multiListContainer}>
        <MultiList {...multiListProps} />
      </View>

      <View style={styles.buttonContainer}>
        <AppButton {...logoutButtonProps} />
      </View>
    </Screen>
  );
};

export default AccountSettings;
