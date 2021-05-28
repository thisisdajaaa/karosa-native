/**
 *
 * Password
 * @format
 *
 */

import React, { FC, useState } from "react";
import { TextInput, View } from "react-native";
import type { PropsType } from "./types";
import PasswordStyles from "./styles";

const Password: FC<PropsType> = (props) => {
  const { inputLength, value, onChangeText } = props;
  const [currentValue, setValue] = useState<string>(value || "");

  return (
    <View style={PasswordStyles.container}>
      {new Array(inputLength).fill(0).map((_v, index) => {
        return (
          <TextInput
            editable={false}
            selectTextOnFocus={false}
            style={[
              PasswordStyles.txtOTP,
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
        style={PasswordStyles.hiddenText}
      />
    </View>
  );
};

export default Password;
