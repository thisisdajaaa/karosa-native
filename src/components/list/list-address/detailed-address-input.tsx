import React, { useState, useEffect, useCallback } from "react";

import { View } from "react-native";
import { BaseText } from "../../base-text";
import { DetailedAddressProps } from "./types";
import { AddressInputStyle } from "./styles";
import { TextInput } from "../../../components/input";
import { useFormikContext, useField } from "formik";

export const DetailedAddress: React.FC<DetailedAddressProps> = ({
  name,
  detailedInput,
}) => {
  const [, meta, helpers] = useField(name);
  const { validateOnChange } = useFormikContext();
  const [currentValue, setCurrentValue] = useState(
    meta.value || meta.initialValue
  );

  useEffect(() => {
    setCurrentValue(meta.value);
  }, [meta.value]);

  const handleChange = useCallback(
    async (text: string) => {
      setCurrentValue(text);
      helpers.setValue(text);
    },
    [helpers, validateOnChange]
  );

  return (
    <View>
      <View style={{ flexWrap: "wrap", paddingLeft: 16 }}>
        <BaseText
          style={{
            paddingTop: 30,
            flexDirection: "column",
            alignContent: "center",
            color: "#BDBDBD",
            fontSize: 12,
          }}
        >
          Unit Number, House Number{"\n"}Building, Street Name
        </BaseText>
      </View>
      <View style={{ paddingLeft: 16 }}>
        <TextInput
          placeholder={detailedInput.placeholder}
          value={currentValue}
          onChangeText={handleChange}
          style={{ textAlign: "left" }}
          customStyles={{
            alignSelf: "flex-start",
            borderWidth: 0,
            padding: 0,
          }}
        />
      </View>
    </View>
  );
};
