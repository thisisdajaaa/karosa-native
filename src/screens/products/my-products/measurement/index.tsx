import React from "react";
import { Screen } from "@app/components/base-screen";
import { Props as ScreenProps } from "@app/components/base-screen/types";
import { RadioButton } from "@app/components/radio-button";
import { Props as RadioButtonProps } from "@app/components/radio-button/types";
import { View } from "react-native";

import { styles } from "./styles";
const MeasurementScreen: React.FC = () => {
  const screenProps: ScreenProps = {
    header: {
      title: "Unit Of Measurement",
    },
  };

  const firstRadioButtonProps: RadioButtonProps = {
    label: "Grams",
  };
  const secondRadioButtonProps: RadioButtonProps = {
    label: "Kilograms",
  };
  const thirdRadioButtonProps: RadioButtonProps = {
    label: "Piece",
  };
  return (
    <Screen {...screenProps}>
      <View style={styles.container}>
        <RadioButton {...firstRadioButtonProps} />
        <RadioButton {...secondRadioButtonProps} />
        <RadioButton {...thirdRadioButtonProps} />
      </View>
    </Screen>
  );
};
export default MeasurementScreen;
