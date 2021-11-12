/**
 *
 * VariationOne
 * @format
 *
 */

import React, { FC } from "react";
import { useField } from "formik";
import { View } from "react-native";
import { ListItem } from "react-native-elements";
import { useFieldError } from "@app/hooks";
import Text from "@app/atoms/Text";
import FormInput from "@app/molecules/FormInput";
import ValidationMessage from "@app/molecules/ValidationMessage";

import type { PropsType } from "./types";
import { NUM_LINES } from "./config";
import ListInputStyles from "./styles";

const VariationFour: FC<PropsType> = (props) => {
  const {
    label,
    hasBottomDivider,
    name,
    placeholder,
    required,
    maxLen,
    keyboardType,
    numofLines,
  } = props;

  const [, meta] = useField(name);
  const { isError } = useFieldError(name);

  return (
    <ListItem bottomDivider={hasBottomDivider}>
      <ListItem.Content style={ListInputStyles.variationOneContainer}>
        <ListItem.Content style={ListInputStyles.labelLengthContainer}>
          <Text text={label} textStyle={ListInputStyles.txtLabel} />
          {required && (
            <Text text="*" textStyle={ListInputStyles.txtRequired} />
          )}
        </ListItem.Content>
        <View style={ListInputStyles.formInputContainer}>
          <FormInput
            name={name}
            keyboardType={keyboardType}
            placeholder={placeholder}
            numberOfLines={NUM_LINES.ONE}
            multiline
            inputStyle={ListInputStyles.txtValue}
            containerStyle={ListInputStyles.columnContainer}
            inputContainerStyle={ListInputStyles.columnInputContainer}
          />
        </View>

        {isError && (
          <ListItem.Content style={ListInputStyles.errorContainer}>
            <ValidationMessage name={name} />
          </ListItem.Content>
        )}
      </ListItem.Content>
    </ListItem>
  );
};

export default VariationFour;
