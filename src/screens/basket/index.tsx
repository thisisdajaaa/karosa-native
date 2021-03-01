import React from "react";
import { Screen } from "@app/components/base-screen";
import { Props as ScreenProps } from "@app/components/base-screen/types";
import { styles } from "./styles";

const BasketScreen: React.FC = () => {
  const screenProps: ScreenProps = {
    header: {
      title: "Basket",
    },
    customStyles: styles.screenContainer,
  };

  return <Screen {...screenProps} />;
};

export default BasketScreen;
