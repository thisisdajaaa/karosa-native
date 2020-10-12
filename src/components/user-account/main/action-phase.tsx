import React from "react";
import { View } from "react-native";
import {
  AntDesign,
  EvilIcons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

import { AccountActions } from "../../atoms/account-actions";
import { ListItem } from "../../atoms/list";
import { Props as ListItemProps } from "../../atoms/list/types";
import { Props as AccountActionProps } from "../../atoms/account-actions/types";

import { styles } from "./styles";

const ActionPhase: React.FC = () => {
  const phaseProps: ListItemProps = {
    title: "My Purchases",
    chevron: true,
    rightLabel: "All purchases",
    style: {
      textStyle: {
        fontSize: 24,
        fontWeight: "500",
        lineHeight: 28,
        fontFamily: "SFProText-Bold",
      },
      containerStyle: {
        paddingTop: 10,
        paddingLeft: 3,
        paddingRight: 12,
        borderBottomWidth: 1,
        borderStyle: "solid",
        borderColor: "#ECECEC",
      },
    },
  };

  const accountActionsProps: AccountActionProps = {
    actions: [
      {
        icon: (
          <EvilIcons
            name="credit-card"
            style={{ fontSize: 77, fontWeight: "100" }}
            color="#C4C4C4"
          />
        ),
        label: "To Pay",
      },
      {
        icon: (
          <MaterialIcons
            name="local-shipping"
            style={{
              fontSize: 72,
              marginTop: 6,
            }}
            color="#C4C4C4"
          />
        ),
        label: "To Ship",
      },
      {
        icon: (
          <AntDesign
            name="inbox"
            style={{
              fontSize: 60,
              marginTop: 8,
            }}
            color="#C4C4C4"
          />
        ),
        label: "To Receive",
      },
      {
        icon: (
          <MaterialCommunityIcons
            name="star-circle-outline"
            style={{
              fontSize: 60,
              marginTop: 9,
            }}
            color="#C4C4C4"
          />
        ),
        label: "To Rate",
      },
    ],
  };

  return (
    <View style={styles.actionPhaseContainer}>
      <ListItem {...phaseProps} />

      <AccountActions {...accountActionsProps} />
    </View>
  );
};

export default ActionPhase;
