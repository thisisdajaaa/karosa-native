import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Screen } from "@app/components/base-screen";
import { MultiList } from "@app/components/multi-list";
import { AppButton } from "@app/components/button";
import { Props as ButtonProps } from "@app/components/button/types";
import { Props as MultiListProps } from "@app/components/multi-list/types";
import { Props as ScreenProps } from "@app/components/base-screen/types";
import routes from "@app/navigators/routes";

import { styles } from "./styles";

const AccountSettingsScreen: React.FC = () => {
  const { goBack, navigate } = useNavigation();

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
    multiChev: [
      {
        title: "My Profile",
        hasSeparator: true,
        onPress: () => navigate(routes.ACCOUNTS_EDT_PRFL),
      },
      {
        title: "Help Centre",
        hasSeparator: true,
        onPress: () =>
          navigate("Main Stack", { screen: routes.DUMMY_HELP_CENTRE }),
      },
      {
        title: "Request for Account Deletion",
        hasSeparator: true,
        onPress: () =>
          navigate("Main Stack", { screen: routes.ACCOUNTS_DELETE }),
      },
      {
        title: "FAQ",
        hasSeparator: true,
        onPress: () => navigate("Main Stack", { screen: routes.DUMMY_FAQ }),
      },
      {
        title: "Privacy Policy",
        hasSeparator: true,
        onPress: () =>
          navigate("Main Stack", { screen: routes.DUMMY_PRIVACY_POLICY }),
      },
      {
        title: "About",
        onPress: () => navigate("Main Stack", { screen: routes.DUMMY_ABOUT }),
      },
    ],
  };

  const logoutButtonProps: ButtonProps = {
    onPress: () => navigate("Main Stack", { screen: routes.ACCOUNTS_LOGOUT }),
    title: "Logout",
    containerStyle: styles.logoutButtonContainer,
    textStyle: styles.txtLogout,
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

export default AccountSettingsScreen;
