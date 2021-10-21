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
import Icon from "@app/atoms/Icon";
import FormInput from "@app/molecules/FormInput";
import ValidationMessage from "@app/molecules/ValidationMessage";

import type { PropsType } from "./types";
import { NUM_LINES } from "./config";
import ListInputStyles from "./styles";

const VariationFour: FC<PropsType> = (props) => {
  const {
    label,
    name,
    placeholder,
    required,
    hasBottomDivider,
    icon,
    keyboardType,
  } = props;

  return (
    <ListItem bottomDivider={hasBottomDivider}>
      <ListItem.Content
        style={[
          {
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          },
        ]}>
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

        {required && <Text text="*" textStyle={ListInputStyles.txtRequired} />}
      </ListItem.Content>
      <ListItem.Content
        style={[
          {
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          },
        ]}>
        <FormInput
          keyboardType={keyboardType}
          name={name}
          placeholder={placeholder}
          placeholderColor={theme.colors.primary}
          numberOfLines={NUM_LINES.ONE}
          inputStyle={ListInputStyles.txtRowInputVariatonFour}
          inputContainerStyle={[ListInputStyles.inputContainer]}
        />
      </ListItem.Content>
      <ValidationMessage name={name} />
    </ListItem>
  );
};

export default VariationFour;
