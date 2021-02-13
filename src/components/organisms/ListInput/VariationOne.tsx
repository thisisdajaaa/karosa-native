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
        <ListItem.Content style={ListInputStyles.labelLengthContainer}>
          <Text text={label} customStyle={ListInputStyles.txtLabel} />
          <Text
            text={`${currentLength}/${maxLen}`}
            customStyle={ListInputStyles.txtLength}
          />
          {required && (
            <Text text="*" customStyle={ListInputStyles.txtRequired} />
          )}
        </ListItem.Content>
        <FormInput
          name={name}
          keyboardType={keyboardType}
          placeholder={placeholder}
          numberOfLines={NUM_LINES.TEN}
          multiline
          inputContainerStyle={ListInputStyles.columnInputContainer}
        />
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
