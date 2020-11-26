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
        listColor: theme.colors.orange5,
        hasSeparator: true,
        onPress: () => navigate(routes.PRODUCT_MAIN),
      },
      {
        title: "Marketing",
        listColor: theme.colors.blue5,
        hasSeparator: true,
        onPress: () => console.log("Marketing"),
      },
      {
        title: "Finance",
        listColor: theme.colors.red5,
        hasSeparator: true,
        onPress: () => console.log("Finance"),
      },
      {
        title: "Reports",
        listColor: theme.colors.purple,
        onPress: () => console.log("Reports"),
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
