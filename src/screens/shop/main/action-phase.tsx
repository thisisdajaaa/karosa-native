import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  AntDesign,
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
    title: "My Sales",
    rightLabel: "All sales",
    onPress: () => navigate("Main Stack", { screen: routes.DUMMY_SALES }),
    style: {
      textStyle: styles.txtSales,
    },
  };

  const accountActionsProps: AccountActionProps = {
    actions: [
      {
        icon: <MaterialIcons name="local-shipping" style={styles.commonIcon} />,
        label: "To Ship",
        onPress: () => navigate("Main Stack", { screen: routes.DUMMY_TO_SHIP }),
      },
      {
        icon: (
          <MaterialCommunityIcons name="cancel" style={styles.commonIcon} />
        ),
        label: "Cancelled",
        onPress: () =>
          navigate("Main Stack", { screen: routes.DUMMY_CANCELLED }),
      },
      {
        icon: <AntDesign name="inbox" style={styles.inboxIcon} />,
        label: "Returns",
        onPress: () => navigate("Main Stack", { screen: routes.DUMMY_RETURNS }),
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
