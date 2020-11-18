import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Screen } from "@app/components/base-screen";
import { MultiList } from "@app/components/multi-list";
import { ListAction } from "@app/components/list/list-action";
import { ListChevron } from "@app/components/list/list-chevron";
import { Props as ScreenProps } from "@app/components/base-screen/types";
import { Props as MultiListProps } from "@app/components/multi-list/types";
import { Props as ListActionProps } from "@app/components/list/list-action/types";
import { Props as ListChevronProps } from "@app/components/list/list-chevron/types";
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
    onPress: () => console.log("Address"),
  };

  const socialMediaProps: ListChevronProps = {
    title: "Social Media Accounts",
    onPress: () => navigate(routes.ACCOUNTS_SOCIAL_MEDIA),
  };

  return (
    <Screen {...screenProps}>
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
    </Screen>
  );
};

export default EditProfileScreen;
