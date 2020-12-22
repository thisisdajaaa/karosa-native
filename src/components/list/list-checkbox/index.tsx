import React from "react";
import { FormCheckbox } from "@app/components/formik/form-checkbox";
import { ListItem } from "react-native-elements";
import { BaseText } from "@app/components/base-text";

import { Props } from "./types";
import { styles } from "./styles";

export const ListCheckBox: React.FC<Props> = ({ name, label }) => {
  return (
    <ListItem>
      <ListItem.Content style={styles.container}>
        <BaseText style={styles.textStyle}>{label}</BaseText>
        <FormCheckbox name={name} label="" />
      </ListItem.Content>
    </ListItem>
  );
};
