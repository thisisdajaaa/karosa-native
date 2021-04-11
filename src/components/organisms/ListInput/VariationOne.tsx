/**
 *
 * VariationOne
 * @format
 *
 */

import React, { FC } from "react";
import { useField } from "formik";
import { ListItem } from "react-native-elements";
import Text from "@app/atoms/Text";
import FormInput from "@app/molecules/FormInput";
import ValidationMessage from "@app/components/molecules/ValidationMessage";

import type { PropsType } from "./types";
import { NUM_LINES } from "./config";
import ListInputStyles from "./styles";
import { View } from "react-native";

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
  const currentLength = String(meta.value).length;

  return (
    <ListItem bottomDivider={hasBottomDivider}>
      <ListItem.Content style={ListInputStyles.variationOneContainer}>
        <View style={ListInputStyles.variationOneLabelContainer}>
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
        </View>
        <View style={ListInputStyles.formInputContainer}>
          <FormInput
            name={name}
            keyboardType={keyboardType}
            placeholder={placeholder}
            numberOfLines={NUM_LINES.TEN}
            multiline
            inputContainerStyle={ListInputStyles.columnInputContainer}
          />
        </View>

        {meta.error && (
          <ListItem.Content style={ListInputStyles.errorContainer}>
            <ValidationMessage name={name} />
          </ListItem.Content>
        )}
      </ListItem.Content>
    </ListItem>
  );
};

export default VariationOne;
