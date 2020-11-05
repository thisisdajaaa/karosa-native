import React, { useState } from "react";

import { View } from "react-native";
import { BaseText } from "../../base-text";

import { AddressInputProps } from "./types";
import { AddressInputStyle } from "./styles";
import { TextInput } from "../../../components/input";

export const AddressInput: React.FC<AddressInputProps> = ({ addressInput }) => {
  const [value, setValue] = useState(addressInput.value);
  return (
    <View style={AddressInputStyle.labelContainer}>
      <BaseText style={AddressInputStyle.inputLabel}>
        {addressInput.label}
      </BaseText>
      <View style={AddressInputStyle.inputContainer}>
        <TextInput
          placeholder={addressInput.placeholder}
          value={value}
          onChangeText={(text) => {
            setValue(text);
          }}
          style={AddressInputStyle.inputStyle}
          customStyles={{
            flexDirection: "column",
            borderWidth: 0,
            padding: 0,
          }}
        />
      </View>
    </View>
  );
};
