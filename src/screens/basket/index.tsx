import React from "react";
import { BaseText } from "@app/components/base-text";
import { Screen } from "@app/components/base-screen";
import { Props as ScreenProps } from "@app/components/base-screen/types";

import { styles } from "./styles";

const BasketScreen: React.FC = () => {
  const screenProps: ScreenProps = {
    header: {
      title: "Basket",
    },
    customStyles: styles.container,
  };

  return (
    <Screen {...screenProps}>
      <BaseText>BASKET</BaseText>
    </Screen>
  );
};

export default BasketScreen;
