/**
 *
 * ListCheckbox
 * @format
 *
 */

import React, { FC } from "react";
import { ListItem } from "react-native-elements";
import FormCheckbox from "@app/molecules/FormCheckbox";
import Text from "@app/atoms/Text";

import type { PropsType } from "./types";
import ListCheckboxStyles from "./styles";

const ListCheckbox: FC<PropsType> = (props) => {
  const { name, label } = props;

  return (
    <ListItem>
      <ListItem.Content style={ListCheckboxStyles.container}>
        <Text customStyle={ListCheckboxStyles.text} text={label} />
        <FormCheckbox name={name} label="" />
      </ListItem.Content>
    </ListItem>
  );
};

export default ListCheckbox;
