import React from "react";
import { View } from "react-native";
import {
  AntDesign,
  EvilIcons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { AccountActions } from "@app/components/account-actions";
import { ListChevron } from "@app/components/list/list-chevron";
import { Separator } from "@app/components/separator";
import { Props as ListChevronProps } from "@app/components/list/list-chevron/types";
import { Props as AccountActionProps } from "@app/components/account-actions/types";

import { styles } from "./styles";

const ActionPhase: React.FC = () => {
  const listChevronProps: ListChevronProps = {
    title: "My Purchases",
    txtInfo: "All purchases",
    onPress: () => console.log("My Purchases"),
  };

  const accountActionsProps: AccountActionProps = {
    actions: [
      {
        icon: <EvilIcons name="credit-card" style={styles.cardIcon} />,
        label: "To Pay",
        onPress: () => console.log("To Pay"),
      },
      {
        icon: <MaterialIcons name="local-shipping" style={styles.shipIcon} />,
        label: "To Ship",
        onPress: () => console.log("To Ship"),
      },
      {
        icon: <AntDesign name="inbox" style={styles.receiveIcon} />,
        label: "To Receive",
        onPress: () => console.log("To Receive"),
      },
      {
        icon: (
          <MaterialCommunityIcons
            name="star-circle-outline"
            style={styles.rateIcon}
          />
        ),
        label: "To Rate",
        onPress: () => console.log("To Rate"),
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
