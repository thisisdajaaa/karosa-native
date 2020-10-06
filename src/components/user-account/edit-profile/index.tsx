import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Screen } from "../../atoms/base-screen";
import { MultiList } from "../../atoms/multi-list";
import { ListAction } from "../../atoms/list/list-action";
import { ListChevron } from "../../atoms/list/list-chevron";
import { Props as ScreenProps } from "../../atoms/base-screen/types";
import { Props as MultiListProps } from "../../atoms/multi-list/types";
import { Props as ListActionProps } from "../../atoms/list/list-action/types";
import { Props as ListChevronProps } from "../../atoms/list/list-chevron/types";
import routes from "../../../navigators/routes";

import { styles } from "./styles";

const EditProfile: React.FC = () => {
  const { goBack, navigate } = useNavigation();

  const screenProps: ScreenProps = {
    header: {
      iconName: "arrow-back",
      title: "Edit Profile",
      customStyles: {
        right: { color: "#BDBDBD" },
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
    style: {
      textStyle: {
        right: {
          color: "#0AA351",
        },
      },
    },
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

export default EditProfile;
