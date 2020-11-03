import React, { useRef } from "react";
import { View } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import { useNavigation } from "@react-navigation/native";
import { Screen } from "@app/components/base-screen";
import { MultiList } from "@app/components/multi-list";
import { AppButton } from "@app/components/button";
import { Props as ButtonProps } from "@app/components/button/types";
import { Props as MultiListProps } from "@app/components/multi-list/types";
import { Props as ScreenProps } from "@app/components/base-screen/types";
import routes from "@app/navigators/routes";

import DeleteAccountModal from "../delete-account";
import LogoutModal from "../logout";

import { styles } from "./styles";

const AccountSettingsScreen: React.FC = () => {
  const { goBack, navigate } = useNavigation();

  const deleteAccRef = useRef<RBSheet>(null);
  const logoutRef = useRef<RBSheet>(null);

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
        onPress: () => deleteAccRef.current?.open(),
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
    onPress: () => logoutRef.current?.open(),
    title: "Logout",
    containerStyle: styles.logoutButtonContainer,
    textStyle: styles.txtLogout,
  };

  return (
    <>
      <Screen {...screenProps}>
        <View style={styles.multiListContainer}>
          <MultiList {...multiListProps} />
        </View>

        <View style={styles.buttonContainer}>
          <AppButton {...logoutButtonProps} />
        </View>
      </Screen>

      <DeleteAccountModal sheetRef={deleteAccRef} />
      <LogoutModal sheetRef={logoutRef} />
    </>
  );
};

export default AccountSettingsScreen;
