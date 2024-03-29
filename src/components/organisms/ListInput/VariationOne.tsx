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
import { theme } from "@app/styles";
import { useFieldError } from "@app/hooks";
import Text from "@app/atoms/Text";
import FormInput from "@app/molecules/FormInput";
import ValidationMessage from "@app/molecules/ValidationMessage";

import type { PropsType } from "./types";
import { NUM_LINES } from "./config";
import ListInputStyles from "./styles";

const VariationOne: FC<PropsType> = (props) => {
  const {
    label,
    hasBottomDivider,
    name,
    placeholder,
    required,
    maxLen,
    keyboardType,
  } = props;

  const [, meta] = useField(name);
  const { isError } = useFieldError(name);
  const currentLength = String(meta.value).length;

  return (
    <ListItem bottomDivider={hasBottomDivider}>
      <ListItem.Content style={ListInputStyles.inputColumn}>
        <ListItem.Content style={ListInputStyles.labelLengthContainer}>
          <Text text={label} textStyle={ListInputStyles.txtLabel} />
          <Text
            text={`(${currentLength}/${maxLen})`}
            textStyle={ListInputStyles.txtLength}
          />
          {required && (
            <Text text="*" textStyle={ListInputStyles.txtRequired} />
          )}
        </ListItem.Content>
        <View style={ListInputStyles.formInputContainer}>
          <FormInput
            name={name}
            keyboardType={keyboardType}
            placeholder={placeholder}
            numberOfLines={NUM_LINES.FIVE}
            multiline
            maxLength={maxLen}
            placeholderColor={theme.colors.primary}
            inputStyle={ListInputStyles.txtValue}
            containerStyle={ListInputStyles.columnContainer}
            inputContainerStyle={ListInputStyles.columnInputContainer}
          />
        </View>

        {isError && <ValidationMessage name={name} />}
      </ListItem.Content>
    </ListItem>
  );
};

export default VariationOne;
