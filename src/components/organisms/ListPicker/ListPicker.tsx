/**
 *
 * ListPicker
 * @format
 *
 */

import React, { FC } from "react";
import { ListItem } from "react-native-elements";
import { View } from "react-native";
import Text from "@app/atoms/Text";
import ValidationMessage from "@app/molecules/ValidationMessage";
import FormPicker from "@app/molecules/FormPicker";

import type { PropsType } from "./types";
import ListPickerStyles from "./styles";

const ListPicker: FC<PropsType> = (props) => {
  const {
    name,
    required,
    hasBottomDivider,
    label,
    data,
    placeholder,
    disabled,
  } = props;

  return (
    <ListItem bottomDivider={hasBottomDivider}>
      <ListItem.Content style={ListPickerStyles.container}>
        <View style={ListPickerStyles.mainRowContainer}>
          <View style={ListPickerStyles.labelContainer}>
            <Text text={label} textStyle={ListPickerStyles.txtLabel} />
            {required && (
              <Text text="*" textStyle={ListPickerStyles.txtRequired} />
            )}
          </View>
          <ListItem.Content style={ListPickerStyles.rowInputContainer}>
            <FormPicker
              data={data}
              placeholder={placeholder}
              name={name}
              disabled={disabled}
            />
          </ListItem.Content>
        </View>
        <ValidationMessage name={name} />
      </ListItem.Content>
    </ListItem>
  );
};

export default ListPicker;
