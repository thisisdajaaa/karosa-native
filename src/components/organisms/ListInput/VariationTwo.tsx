/**
 *
 * VariationTwo
 * @format
 *
 */

import React, { FC } from "react";
import { ListItem } from "react-native-elements";
import { theme } from "@app/styles";
import { useFieldError } from "@app/hooks";
import Text from "@app/atoms/Text";
import Icon from "@app/atoms/Icon";
import FormInput from "@app/molecules/FormInput";
import ValidationMessage from "@app/molecules/ValidationMessage";

import type { PropsType } from "./types";
import { NUM_LINES } from "./config";
import ListInputStyles from "./styles";

const VariationTwo: FC<PropsType> = (props) => {
  const {
    label,
    name,
    placeholder,
    required,
    hasBottomDivider,
    icon,
    keyboardType,
    maxLen,
  } = props;

  const { isError } = useFieldError(name);

  return (
    <ListItem bottomDivider={hasBottomDivider}>
      <ListItem.Content style={ListInputStyles.inputColumn}>
        <ListItem.Content style={ListInputStyles.contentContainer}>
          <ListItem.Content style={ListInputStyles.labelContainer}>
            {icon ? (
              <>
                <Icon
                  group={icon.group}
                  name={icon.name}
                  height={icon.height}
                  width={icon.width}
                  extraStyle={ListInputStyles.icon}
                />
                <Text text={label} textStyle={ListInputStyles.txtWithIcon} />
              </>
            ) : (
              <Text text={label} textStyle={ListInputStyles.txtLabel} />
            )}

            {required && (
              <Text text="*" textStyle={ListInputStyles.txtRequired} />
            )}
          </ListItem.Content>

          <ListItem.Content>
            <FormInput
              keyboardType={keyboardType}
              name={name}
              placeholder={placeholder}
              placeholderColor={theme.colors.primary}
              numberOfLines={NUM_LINES.ONE}
              maxLength={maxLen}
              inputStyle={ListInputStyles.txtRowInput}
              inputContainerStyle={ListInputStyles.inputContainer}
            />
          </ListItem.Content>
        </ListItem.Content>

        {isError && (
          <ListItem.Content>
            <ValidationMessage name={name} />
          </ListItem.Content>
        )}
      </ListItem.Content>
    </ListItem>
  );
};

export default VariationTwo;
