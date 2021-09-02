import React, { useRef } from "react";
import { View } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import { useNavigation } from "@react-navigation/native";
import BaseScreen from "@app/atoms/BaseScreen";
import { MultiList } from "@app/components/organisms/MultiList";
import Button from "@app/atoms/Button";
import { PropsType as ButtonProps } from "@app/atoms/Button/types";
import { Props as MultiListProps } from "@app/components/organisms/MultiList/types";
import { Props as ScreenProps } from "@app/atoms/BaseScreen/types";
import routes from "@app/navigators/routes";

import DeleteAccountModal from "../UserAccountDelete";
import LogoutModal from "../UserAccountLogout";

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
        hasBottomDivider: true,
        onPress: () => navigate(routes.ACCOUNTS_EDT_PRFL),
      },
      {
        title: "Help Centre",
        hasBottomDivider: true,
        onPress: () => console.log("Help Centre"),
      },
      {
        title: "Request for Account Deletion",
        hasBottomDivider: true,
        onPress: () => deleteAccRef.current?.open(),
      },
      {
        title: "FAQ",
        hasBottomDivider: true,
        onPress: () => console.log("FAQ"),
      },
      {
        title: "Privacy Policy",
        hasBottomDivider: true,
        onPress: () => console.log("Privacy Policy"),
      },
      {
        title: "About",
        onPress: () => console.log("About"),
      },
    ],
  };

  const logoutButtonProps: ButtonProps = {
    onPress: () => logoutRef.current?.open(),
    title: "Logout",
    containerStyle: styles.logoutButtonContainer,
    textStyle: styles.txtLogout,
    variation: 2,
  };

  return (
    <>
      <BaseScreen {...screenProps}>
        <View style={styles.multiListContainer}>
          <MultiList {...multiListProps} />
        </View>

        <View style={styles.buttonContainer}>
          <Button {...logoutButtonProps} />
        </View>
      </BaseScreen>

      <DeleteAccountModal sheetRef={deleteAccRef} />
      <LogoutModal sheetRef={logoutRef} />
    </>
  );
};

export default AccountSettingsScreen;
