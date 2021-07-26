import React from "react";
import { View } from "react-native";
import {
  AntDesign,
  EvilIcons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import ListChevron from "@app/organisms/ListChevron";
import { PropsType as ListChevronProps } from "@app/organisms/ListChevron/types";
import AccountActions from "@app/atoms/AccountActions";
import { Props as AccountActionProps } from "@app/atoms/AccountActions/types";
import Divider from "@app/atoms/Divider";
import { styles } from "./styles";

const ActionPhase: React.FC = () => {
  const listChevronProps: ListChevronProps = {
    variation: 1,
    title: "My Purchases",
    info: "All purchases",
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
      <Divider />
      <AccountActions {...accountActionsProps} />
    </View>
  );
};

export default ActionPhase;
