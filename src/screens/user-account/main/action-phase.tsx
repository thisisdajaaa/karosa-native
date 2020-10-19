import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
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
import routes from "@app/navigators/routes";

import { styles } from "./styles";

const ActionPhase: React.FC = () => {
  const { navigate } = useNavigation();

  const listChevronProps: ListChevronProps = {
    title: "My Purchases",
    rightLabel: "All purchases",
    onPress: () => navigate("Main Stack", { screen: routes.DUMMY_PURCHASES }),
    style: {
      textStyle: styles.txtMyPurchases,
    },
  };

  const accountActionsProps: AccountActionProps = {
    actions: [
      {
        icon: <EvilIcons name="credit-card" style={styles.cardIcon} />,
        label: "To Pay",
        onPress: () => navigate("Main Stack", { screen: routes.DUMMY_TO_PAY }),
      },
      {
        icon: <MaterialIcons name="local-shipping" style={styles.shipIcon} />,
        label: "To Ship",
        onPress: () => navigate("Main Stack", { screen: routes.DUMMY_TO_SHIP }),
      },
      {
        icon: <AntDesign name="inbox" style={styles.receiveIcon} />,
        label: "To Receive",
        onPress: () =>
          navigate("Main Stack", { screen: routes.DUMMY_TO_RECEIVE }),
      },
      {
        icon: (
          <MaterialCommunityIcons
            name="star-circle-outline"
            style={styles.rateIcon}
          />
        ),
        label: "To Rate",
        onPress: () => navigate("Main Stack", { screen: routes.DUMMY_TO_RATE }),
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
