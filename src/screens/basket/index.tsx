import React from "react";
import { Screen } from "@app/components/base-screen";
import { Props as ScreenProps } from "@app/components/base-screen/types";
import { styles } from "./styles";
import { View } from "react-native";

import BasketEmpty from "@app/components/molecules/BasketEmpty";

const BasketScreen: React.FC = () => {
  const screenProps: ScreenProps = {
    header: {
      title: "My Basket",
    },
    customStyles: styles.screenContainer,
  };

  return (
    <View>
      <Screen {...screenProps} />
      <View>
        <BasketEmpty></BasketEmpty>
      </View>
    </View>
  );
};

export default BasketScreen;
