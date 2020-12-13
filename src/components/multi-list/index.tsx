import React from "react";
import { View } from "react-native";

import { ListAction } from "../list/list-action";
import { ListChevron } from "../list/list-chevron";
import { ListDisplay } from "../list/list-display";
import { Separator } from "../separator";

import { Props } from "./types";

export const MultiList: React.FC<Props> = React.memo(
  ({ multiChev, multiDisp, multiAction }) => {
    return (
      <React.Fragment>
        {multiChev &&
          multiChev.map((item, key) => (
            <View key={key}>
              <ListChevron {...item} />
              {item.hasSeparator && <Separator />}
            </View>
          ))}

        {multiDisp &&
          multiDisp.map((item, key) => (
            <View key={key}>
              <ListDisplay {...item} />
              {item.hasSeparator && <Separator />}
            </View>
          ))}

        {multiAction &&
          multiAction.map((item, key) => (
            <View key={key}>
              <ListAction {...item} />
              {item.hasSeparator && <Separator />}
            </View>
          ))}
      </React.Fragment>
    );
  }
);

MultiList.displayName = "MultiList";
