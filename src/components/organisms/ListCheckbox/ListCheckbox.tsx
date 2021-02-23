/**
 *
 * ListCheckbox
 * @format
 *
 */

import React, { FC } from "react";
import { ListItem } from "react-native-elements";
import { useField } from "formik";
import { theme } from "@app/styles";
import Text from "@app/atoms/Text";
import FormCheckbox from "@app/molecules/FormCheckbox";
import ValidationMessage from "@app/components/molecules/ValidationMessage";

import type { PropsType } from "./types";
import ListCheckboxStyles from "./styles";

const ListCheckbox: FC<PropsType> = (props) => {
  const { name, label, hasBottomDivider } = props;
  const [, meta] = useField(name);
  const unchecked = meta.error ? theme.colors.red15 : theme.colors.dark10;

  return (
    <ListItem bottomDivider={hasBottomDivider}>
      <ListItem.Content style={ListCheckboxStyles.container}>
        <ListItem.Content style={ListCheckboxStyles.checkboxContainer}>
          <Text textStyle={ListCheckboxStyles.text} text={label} />
          <ListItem.Content style={ListCheckboxStyles.rightContainer}>
            <FormCheckbox name={name} label="" uncheckedColor={unchecked} />
          </ListItem.Content>
        </ListItem.Content>
        <ValidationMessage name={name} />
      </ListItem.Content>
    </ListItem>
  );
};

export default ListCheckbox;
