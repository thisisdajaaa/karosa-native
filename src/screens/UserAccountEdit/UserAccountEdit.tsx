/**
 *
 * UserAccountEdit
 * @format
 *
 */

import React, { FC } from "react";
import { useNavigation } from "@react-navigation/core";
import UserAccountEditTemplate from "@app/templates/UserAccountEdit";
import routes from "@app/navigators/routes";

const UserAccountEditScreen: FC = () => {
  const { goBack, navigate } = useNavigation();

  const handleSocialMedia = () => navigate(routes.ACCOUNTS_SOCIAL_MEDIA);

  return (
    <UserAccountEditTemplate
      handleSocialMedia={handleSocialMedia}
      goBack={goBack}
    />
  );
};

export default UserAccountEditScreen;
