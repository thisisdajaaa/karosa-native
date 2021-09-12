/**
 *
 * UserAccountSocialMedia
 * @format
 *
 */

import React, { FC } from "react";
import { useNavigation } from "@react-navigation/core";
import UserAccountSocialMediaTemplate from "@app/templates/UserAccountSocialMedia";

const UserAccountSocialMediaScreen: FC = () => {
  const { goBack } = useNavigation();

  return <UserAccountSocialMediaTemplate goBack={goBack} />;
};

export default UserAccountSocialMediaScreen;
