/**
 *
 * OTP
 * @format
 *
 */

import React, { FC, useState } from "react";
import { TextInput, View } from "react-native";

import type { PropsType } from "./types";
import OTPStyles from "./styles";

const OTP: FC<PropsType> = (props) => {
  const { inputLength, value, onChangeText } = props;

  const [currentValue, setValue] = useState<string>(value || "");

  return (
    <View style={OTPStyles.container}>
      {new Array(inputLength).fill(0).map((_, index) => {
        return (
          <TextInput
            editable={false}
            selectTextOnFocus={false}
            style={[
              OTPStyles.txtOTP,
              // eslint-disable-next-line react-native/no-inline-styles
              { opacity: currentValue?.charAt(index) ? 1 : 0.5 },
            ]}
            value={currentValue?.charAt(index) || ""}
            key={index}
          />
        );
      })}

      <TextInput
        maxLength={inputLength}
        keyboardType="number-pad"
        returnKeyType="done"
        onChangeText={(text) => {
          setValue(text);
          if (onChangeText) onChangeText(text);
        }}
        style={OTPStyles.hiddenText}
      />
    </View>
  );
};

export default OTP;
