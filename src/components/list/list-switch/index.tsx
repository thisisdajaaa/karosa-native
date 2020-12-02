import React from "react";
import { ListItem } from "react-native-elements";
import { BaseText } from "@app/components/base-text";
import { FormSwitch } from "@app/components/formik/form-switch";

import { Props } from "./types";
import { styles } from "./styles";

export const ListSwitch: React.FC<Props> = React.memo(
  ({ title, boldTitle, name, hasBottomDivider, disabled, extraInfo }) => {
    return (
      <ListItem bottomDivider={hasBottomDivider}>
        {boldTitle && (
          <BaseText style={styles.txtBoldTitle}>{boldTitle}</BaseText>
        )}
        {title && <BaseText style={styles.txtTitle}>{title}</BaseText>}
        {extraInfo && (
          <BaseText style={styles.txtExtraInfo}>{extraInfo}</BaseText>
        )}

        <ListItem.Content style={styles.switchContainer}>
          <FormSwitch name={name} disabled={disabled} />
        </ListItem.Content>
      </ListItem>
    );
  }
);

ListSwitch.displayName = "ListSwitch";
