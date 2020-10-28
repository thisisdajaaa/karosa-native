import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { theme } from "@app/styles";
import { MultiList } from "@app/components/multi-list";
import { Props as MultiListProps } from "@app/components/multi-list/types";
import routes from "@app/navigators/routes";

import { styles } from "./styles";

const Choices = () => {
  const { navigate } = useNavigation();

  const multiListProps: MultiListProps = {
    multiChev: [
      {
        title: "My Wishlist",
        rightLabel: "140 Items",
        listColor: theme.colors.orange,
        hasSeparator: true,
        onPress: () =>
          navigate("Main Stack", { screen: routes.DUMMY_WISHLIST }),
      },
      {
        title: "Karosa Wallet",
        listColor: theme.colors.purple,
        hasSeparator: true,
        onPress: () =>
          navigate("Main Stack", { screen: routes.DUMMY_KAROSA_WALLET }),
      },
      {
        title: "Vouchers",
        listColor: theme.colors.green5,
        hasSeparator: true,
        onPress: () =>
          navigate("Main Stack", { screen: routes.DUMMY_VOUCHERS }),
      },
      {
        title: "Refer a friend",
        listColor: theme.colors.red5,
        onPress: () =>
          navigate("Main Stack", { screen: routes.DUMMY_FRIEND_REFER }),
      },
    ],
  };

  return (
    <View style={styles.choicesContainer}>
      <MultiList {...multiListProps} />
    </View>
  );
};

export default Choices;
