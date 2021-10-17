/**
 *
 * UserAccountSettings
 * @format
 *
 */

import React, { useRef } from "react";
import { View } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import { useNavigation } from "@react-navigation/native";
import { MultiList } from "@app/organisms/MultiList";
import Button from "@app/atoms/Button";
import Header from "@app/molecules/Header";
import { theme } from "@app/styles";
import { PropsType as ButtonProps } from "@app/atoms/Button/types";
import { Props as MultiListProps } from "@app/organisms/MultiList/types";
import routes from "@app/navigators/routes";
import DeleteAccountModal from "@app/screens/UserAccountDelete";
import LogoutAccountModal from "@app/screens/UserAccountLogout";

import UserAccountSettingsStyle from "./styles";

const UserAccountSettingsTemplate: React.FC = () => {
  const { goBack, navigate } = useNavigation();

  const deleteAccRef = useRef<RBSheet>(null);
  const logoutRef = useRef<RBSheet>(null);

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
        onPress: () => 0,
      },
      {
        title: "Request for Account Deletion",
        hasBottomDivider: true,
        onPress: () => deleteAccRef.current?.open(),
      },
      {
        title: "FAQ",
        hasBottomDivider: true,
        onPress: () => 0,
      },
      {
        title: "Privacy Policy",
        hasBottomDivider: true,
        onPress: () => 0,
      },
      {
        title: "About",
        onPress: () => 0,
      },
    ],
  };

  const logoutButtonProps: ButtonProps = {
    onPress: () => logoutRef.current?.open(),
    title: "Logout",
    containerStyle: UserAccountSettingsStyle.logoutButtonContainer,
    titleStyle: UserAccountSettingsStyle.txtLogout,
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
          text: "Account Settings",
          style: UserAccountSettingsStyle.txtHeader,
        }}
      />
      <View style={UserAccountSettingsStyle.multiListContainer}>
        <MultiList {...multiListProps} />
      </View>

      <View style={UserAccountSettingsStyle.buttonContainer}>
        <Button {...logoutButtonProps} />
      </View>

      <DeleteAccountModal sheetRef={deleteAccRef} />
      <LogoutAccountModal sheetRef={logoutRef} />
    </>
  );
};

export default UserAccountSettingsTemplate;
