/**
 *
 * MultiList
 * @format
 *
 */

import React, { Fragment, memo, FC } from "react";
import { View } from "react-native";

import ListAction from "@app/organisms/ListAction";
import ListChevron from "@app/organisms/ListChevron";
import { ListDisplay } from "@app/organisms/ListDisplay";
import Divider from "@app/atoms/Divider";

import { Props } from "./types";

export const MultiList: FC<Props> = memo(
  ({ multiChev, multiDisp, multiAction }) => {
    return (
      <Fragment>
        {multiChev &&
          multiChev.map((item, key) => (
            <View key={key}>
              <ListChevron {...item} />
              {item.hasSeparator && <Divider />}
            </View>
          ))}

        {multiDisp &&
          multiDisp.map((item, key) => (
            <View key={key}>
              <ListDisplay {...item} />
              {item.hasSeparator && <Divider />}
            </View>
          ))}

        {multiAction &&
          multiAction.map((item, key) => (
            <View key={key}>
              <ListAction {...item} />
              {item.hasSeparator && <Divider />}
            </View>
          ))}
      </Fragment>
    );
  }
);

MultiList.displayName = "MultiList";
