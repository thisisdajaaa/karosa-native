/**
 *
 * ListPicker
 * @format
 *
 */

import React, { FC } from "react";
import { ListItem } from "react-native-elements";
import Text from "@app/atoms/Text";
import FormPicker from "@app/components/molecules/FormPicker";

import type { PropsType } from "./types";
import ListPickerStyles from "./styles";

const ListPicker: FC<PropsType> = (props) => {
  const { name, label, data, placeholder } = props;

  return (
    <ListItem bottomDivider={true}>
      <ListItem.Content style={ListPickerStyles.container}>
        <Text text={label} customStyle={ListPickerStyles.text} />
        <FormPicker data={data} placeholder={placeholder} name={name} />
      </ListItem.Content>
    </ListItem>
  );
};

export default ListPicker;
