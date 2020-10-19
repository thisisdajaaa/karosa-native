import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MultiList } from "@app/components/multi-list";
import { Props as MultiListProps } from "@app/components/multi-list/types";
import { theme } from "@app/styles";
import routes from "@app/navigators/routes";

import { styles } from "./styles";

const Choices = () => {
  const { navigate } = useNavigation();

  const multiListProps: MultiListProps = {
    multiChev: [
      {
        title: "My Products",
        rightLabel: "80 Products",
        listColor: theme.colors.orange,
        hasSeparator: true,
        onPress: () =>
          navigate("Main Stack", { screen: routes.DUMMY_PRODUCTS }),
      },
      {
        title: "Marketing",
        listColor: theme.colors.blue5,
        hasSeparator: true,
        onPress: () =>
          navigate("Main Stack", { screen: routes.DUMMY_MARKETING }),
      },
      {
        title: "Finance",
        listColor: theme.colors.red5,
        hasSeparator: true,
        onPress: () => navigate("Main Stack", { screen: routes.DUMMY_FINANCE }),
      },
      {
        title: "Reports",
        listColor: theme.colors.purple,
        onPress: () => navigate("Main Stack", { screen: routes.DUMMY_REPORTS }),
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
