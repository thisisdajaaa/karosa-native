import React from "react";
import { View } from "react-native";

import { ListItem } from "../list";
import { Separator } from "../separator";

import { Props } from "./types";

export const MultiList: React.FC<Props> = ({ listItem }) => {
  return (
    <React.Fragment>
      {listItem.map((item, key) => (
        <View key={key}>
          <ListItem {...item} />
          {item.hasSeparator && <Separator />}
        </View>
      ))}
    </React.Fragment>
  );
};
