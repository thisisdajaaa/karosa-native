/**
 *
 * VariationThree
 * @format
 *
 */

import React, { FC } from "react";
import { ListItem } from "react-native-elements";
import { View } from "react-native";
import { useFieldError } from "@app/hooks";
import { theme } from "@app/styles";
import Text from "@app/atoms/Text";
import FormInput from "@app/molecules/FormInput";
import ValidationMessage from "@app/molecules/ValidationMessage";

import type { PropsType } from "./types";
import { NUM_LINES } from "./config";
import ListInputStyles from "./styles";

const VariationThree: FC<PropsType> = (props) => {
  const {
    label,
    name,
    placeholder,
    required,
    hasBottomDivider,
    keyboardType,
    info,
  } = props;

  const { isError } = useFieldError(name);

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
        </View>
        <View style={ListInputStyles.infoContainer}>
          {info && <Text text={info} textStyle={ListInputStyles.txtInfo} />}
        </View>
        <View style={ListInputStyles.mainRowContainer}>
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

        {isError && <ValidationMessage name={name} />}
      </ListItem.Content>
    </ListItem>
  );
};

export default VariationThree;
