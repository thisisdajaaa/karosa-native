import React from "react";
import { ListItem } from "react-native-elements";
import { FormImage } from "@app/components/formik/form-image";

import { Props } from "./types";

export const ListImage: React.FC<Props> = React.memo(
  ({ name, hasBottomDivider }) => {
    return (
      <ListItem bottomDivider={hasBottomDivider}>
        <FormImage name={name} />
      </ListItem>
    );
  }
);

ListImage.displayName = "ListImage";
