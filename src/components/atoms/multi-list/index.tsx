import React from "react";
import { View } from "react-native";

import { ListChevron } from "../list/list-chevron";
import { Separator } from "../separator";

import { Props } from "./types";

export const MultiList: React.FC<Props> = ({ listItem, hasChevron }) => {
  return (
    <React.Fragment>
      {listItem.map((item, key) => (
        <View key={key}>
          {hasChevron && <ListChevron {...item} />}
          {item.hasSeparator && <Separator />}
        </View>
      ))}
    </React.Fragment>
  );
};
