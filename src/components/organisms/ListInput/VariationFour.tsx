import FormInput from "@app/components/molecules/FormInput";
import React, { FC } from "react";
import { View } from "react-native";
import { Text } from "react-native-elements";
import { useField } from "formik";
import ListInputStyles from "./styles";

import type { PropsType } from "./types";
import { theme } from "@app/styles";

const VariationFour: FC<PropsType> = (props) => {
  const { label, name, placeholder, required, maxLen, keyboardType } = props;

  const [, meta] = useField(name);

  const currentLength = String(meta.value).length;

  return (
    <View>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ marginRight: 2, fontSize: 13.33, lineHeight: 16 }}>
          {label}
        </Text>
        <Text
          style={{
            ...theme.textListItem,
            fontWeight: "400",
            color: theme.colors.dark10,
            marginLeft: 2,
          }}>{`(${currentLength}/${maxLen})`}</Text>
        {required && <Text style={{ color: theme.colors.red5 }}>*</Text>}
      </View>

      <FormInput
        name={name}
        keyboardType={keyboardType}
        placeholder={placeholder}
        numberOfLines={1}
        multiline={false}
        inputStyle={ListInputStyles.txtValue}
        inputContainerStyle={ListInputStyles.columnInputContainer}
      />
    </View>
  );
};

export default VariationFour;
