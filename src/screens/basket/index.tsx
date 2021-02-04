import React from "react";
import { Screen } from "@app/components/base-screen";
import { Props as ScreenProps } from "@app/components/base-screen/types";

import { styles } from "./styles";
import { ScrollView, View } from "react-native";

const BasketScreen: React.FC = () => {
  const screenProps: ScreenProps = {
    header: {
      title: "Basket",
    },
    customStyles: styles.container,
  };

  return (
    <Screen {...screenProps}>
      <ScrollView></ScrollView>
    </Screen>
  );
};

export default BasketScreen;
