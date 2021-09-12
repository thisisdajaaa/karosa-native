import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import BaseScreen from "@app/atoms/BaseScreen";
import { MultiList } from "@app/components/organisms/MultiList";
import ListAction from "@app/components/organisms/ListAction";
import ListChevron from "@app/components/organisms/ListChevron";
import { Props as ScreenProps } from "@app/components/base-screen/types";
import { Props as MultiListProps } from "@app/components/organisms/MultiList/types";
import { Props as ListActionProps } from "@app/components/organisms/ListAction/types";
import { PropsType as ListChevronProps } from "@app/components/organisms/ListChevron/types";
import routes from "@app/navigators/routes";

import { styles } from "./styles";

const EditProfileScreen: React.FC = () => {
  const { goBack, navigate } = useNavigation();

  const screenProps: ScreenProps = {
    header: {
      iconName: "arrow-back",
      title: "Edit Profile",
      customStyles: {
        right: styles.txtSave,
      },
      press: {
        left: () => goBack(),
        right: () => console.log("edit profile"),
      },
      text: {
        right: "Save",
      },
    },
    customStyles: styles.container,
  };

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
    action: () => console.log("set password"),
  };

  const addressProps: ListChevronProps = {
    title: "Addresses",
    onPress: () => navigate(routes.ACCOUNTS_ADDRESS),
  };

  const socialMediaProps: ListChevronProps = {
    title: "Social Media Accounts",
    onPress: () => navigate(routes.ACCOUNTS_SOCIAL_MEDIA),
  };

  return (
    <BaseScreen {...screenProps}>
      <View style={styles.multiListContainer}>
        <MultiList {...multiListProps} />
        <ListAction {...passwordProps} />
      </View>

      <View style={styles.addressContainer}>
        <ListChevron {...addressProps} />
      </View>

      <View>
        <ListChevron {...socialMediaProps} />
      </View>
    </BaseScreen>
  );
};

export default EditProfileScreen;
