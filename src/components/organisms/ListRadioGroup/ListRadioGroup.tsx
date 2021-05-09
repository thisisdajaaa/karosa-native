/**
 *
 * ListRadioGroup
 * @format
 *
 */

import React, { FC } from "react";
import { ListItem } from "react-native-elements";
import FormRadioGroup from "@app/molecules/FormRadioGroup";

import type { PropsType } from "./types";
import ListRadioGroupStyles from "./styles";

const ListRadioGroup: FC<PropsType> = (props) => {
  const { name, options } = props;

  return (
    <ListItem>
      <ListItem.Content style={ListRadioGroupStyles.container}>
        <FormRadioGroup name={name} options={options} />
      </ListItem.Content>
    </ListItem>
  );
};

export default ListRadioGroup;
