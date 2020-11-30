import React from "react";
import { ListItem } from "react-native-elements";
import { BaseText } from "@app/components/base-text";
import { FormSwitch } from "@app/components/formik/form-switch";

import { Props } from "./types";
import { styles } from "./styles";

export const ListSwitch: React.FC<Props> = React.memo(
  ({ title, name, hasBottomDivider }) => {
    return (
      <ListItem bottomDivider={hasBottomDivider}>
        <ListItem.Content style={styles.container}>
          <BaseText style={styles.txtTitle}>{title}</BaseText>
        </ListItem.Content>
        <ListItem.Content style={styles.switchContainer}>
          <FormSwitch name={name} />
        </ListItem.Content>
      </ListItem>
    );
  }
);

ListSwitch.displayName = "ListSwitch";
