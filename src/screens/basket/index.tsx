import React from "react";
import { Dimensions } from "react-native";
import { BaseText } from "@app/components/base-text";
import { Screen } from "@app/components/base-screen";
import { Props as ScreenProps } from "@app/components/base-screen/types";
import { t } from "@app/config/i18n";
import Button from "@app/components/atoms/Button";

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
      <BaseText>{t("HELLO")}</BaseText>
      <Button
        activeOpacity={0.8}
        raised
        title="Solid Button"
        buttonStyle={{
          backgroundColor: "#0AA351",
          height: Dimensions.get("window").height * 0.08,
          width: Dimensions.get("window").width * 0.9,
        }}
      />
    </Screen>
  );
};

export default BasketScreen;
