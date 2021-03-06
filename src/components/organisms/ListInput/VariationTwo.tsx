/**
 *
 * VariationTwo
 * @format
 *
 */

import React, { FC } from "react";
import { ListItem } from "react-native-elements";
import { theme } from "@app/styles";
import Text from "@app/atoms/Text";
import FormInput from "@app/molecules/FormInput";
import ValidationMessage from "@app/components/molecules/ValidationMessage";

import type { PropsType } from "./types";
import { NUM_LINES } from "./config";
import ListInputStyles from "./styles";
import { View } from "react-native";

const VariationTwo: FC<PropsType> = (props) => {
  const {
    label,
    name,
    placeholder,
    required,
    hasBottomDivider,
    keyboardType,
  } = props;

  return (
    <ListItem bottomDivider={hasBottomDivider}>
      <ListItem.Content style={ListInputStyles.variationTwoContainer}>
        <View style={ListInputStyles.mainRowContainer}>
          <View style={ListInputStyles.labelContainer}>
            <Text text={label} textStyle={ListInputStyles.txtLabel} />
            {required && (
              <Text text="*" textStyle={ListInputStyles.txtRequired} />
            )}
          </View>
          <ListItem.Content style={ListInputStyles.rowInputContainer}>
            <FormInput
              keyboardType={keyboardType}
              name={name}
              placeholder={placeholder}
              placeholderColor={theme.colors.primary}
              numberOfLines={NUM_LINES.ONE}
              inputStyle={ListInputStyles.txtRowInput}
              inputContainerStyle={ListInputStyles.inputContainer}
            />
          </ListItem.Content>
        </View>
        <ValidationMessage name={name} />
      </ListItem.Content>
    </ListItem>
  );
};

export default VariationTwo;
