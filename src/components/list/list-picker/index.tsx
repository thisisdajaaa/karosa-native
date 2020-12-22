import React from "react";
import { ListItem } from "react-native-elements";
import { BaseText } from "@app/components/base-text";
import { FormPicker } from "@app/components/formik/form-picker";

import { styles } from "./styles";
import { Props } from "./types";

export const ListPicker: React.FC<Props> = React.memo(
  ({ name, label, data, placeholder }) => {
    return (
      <ListItem bottomDivider={true}>
        <ListItem.Content style={styles.container}>
          <BaseText style={styles.textStyle}>{label}</BaseText>
          <FormPicker data={data} placeholder={placeholder} name={name} />
        </ListItem.Content>
      </ListItem>
    );
  }
);
