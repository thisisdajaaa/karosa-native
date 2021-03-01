import React from "react";
import { View } from "react-native";
import {
  AntDesign,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { AccountActions } from "@app/components/account-actions";
import { ListChevron } from "@app/components/list/list-chevron";
import { Separator } from "@app/components/separator";
import { BaseProps as ListChevronProps } from "@app/components/list/list-chevron/types";
import { Props as AccountActionProps } from "@app/components/account-actions/types";

import { styles } from "./styles";

const ActionPhase: React.FC = () => {
  const listChevronProps: ListChevronProps = {
    title: "My Sales",
    txtInfo: "All sales",
    onPress: () => console.log("My Sales"),
  };

  const accountActionsProps: AccountActionProps = {
    actions: [
      {
        icon: <MaterialIcons name="local-shipping" style={styles.commonIcon} />,
        label: "To Ship",
        onPress: () => console.log("To Ship"),
      },
      {
        icon: (
          <MaterialCommunityIcons name="cancel" style={styles.commonIcon} />
        ),
        label: "Cancelled",
        onPress: () => console.log("Cancelled"),
      },
      {
        icon: <AntDesign name="inbox" style={styles.inboxIcon} />,
        label: "Returns",
        onPress: () => console.log("Returns"),
      },
    ],
  };

  return (
    <View style={styles.actionPhaseContainer}>
      <ListChevron {...listChevronProps} />
      <Separator />

      <AccountActions {...accountActionsProps} />
    </View>
  );
};

export default ActionPhase;
