import React, { FC } from "react";
import { View } from "react-native";
import {
  AntDesign,
  EvilIcons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import ListChevron from "@app/organisms/ListChevron";
import AccountActions from "@app/atoms/AccountActions";
import type { PropsType as ListChevronProps } from "@app/organisms/ListChevron/types";
import type { Props as AccountActionProps } from "@app/atoms/AccountActions/types";

import UserAccountMainStyles from "./styles";

const ActionPhase: FC = () => {
  const listChevronProps: ListChevronProps = {
    variation: 1,
    title: "My Purchases",
    info: "All purchases",
    onPress: () => 0,
    hasBottomDivider: true,
  };

  const accountActionsProps: AccountActionProps = {
    actions: [
      {
        icon: (
          <EvilIcons
            name="credit-card"
            style={UserAccountMainStyles.cardIcon}
          />
        ),
        label: "To Pay",
        onPress: () => 0,
      },
      {
        icon: (
          <MaterialIcons
            name="local-shipping"
            style={UserAccountMainStyles.shipIcon}
          />
        ),
        label: "To Ship",
        onPress: () => 0,
      },
      {
        icon: (
          <AntDesign name="inbox" style={UserAccountMainStyles.receiveIcon} />
        ),
        label: "To Receive",
        onPress: () => 0,
      },
      {
        icon: (
          <MaterialCommunityIcons
            name="star-circle-outline"
            style={UserAccountMainStyles.rateIcon}
          />
        ),
        label: "To Rate",
        onPress: () => 0,
      },
    ],
  };

  return (
    <View style={UserAccountMainStyles.actionPhaseContainer}>
      <ListChevron {...listChevronProps} />
      <AccountActions {...accountActionsProps} />
    </View>
  );
};

export default ActionPhase;
