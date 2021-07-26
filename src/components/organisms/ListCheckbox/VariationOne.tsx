/**
 *
 * ListCheckbox
 * @format
 *
 */

import React, { FC } from "react";
import { ListItem } from "react-native-elements";
import { View } from "react-native";
import { useField } from "formik";
import { theme } from "@app/styles";
import FormCheckbox from "@app/molecules/FormCheckbox";
import ValidationMessage from "@app/molecules/ValidationMessage";

import type { PropsType } from "./types";
import ListCheckboxStyles from "./styles";

const ListCheckbox: FC<PropsType> = (props) => {
  const { name, label, hasBottomDivider } = props;
  const [, meta] = useField(name);
  const unchecked = meta.error ? theme.colors.red15 : theme.colors.dark10;

  return (
    <ListItem bottomDivider={hasBottomDivider}>
      <ListItem.Content style={ListCheckboxStyles.container}>
        <View style={ListCheckboxStyles.checkboxContainer}>
          <FormCheckbox name={name} label={label} uncheckedColor={unchecked} />
        </View>
        <ValidationMessage name={name} />
      </ListItem.Content>
    </ListItem>
  );
};

export default ListCheckbox;
