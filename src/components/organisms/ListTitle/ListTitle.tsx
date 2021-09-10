/**
 *
 * ListTitle
 * @format
 *
 */

import React, { FC } from "react";
import { ListItem } from "react-native-elements";
import { View } from "react-native";
import Text from "@app/atoms/Text";

import type { PropsType } from "./types";
import ListTitleStyles from "./styles";

const ListTitle: FC<PropsType> = (props) => {
  const { label, hasBottomDivider, required } = props;

  return (
    <ListItem bottomDivider={hasBottomDivider}>
      <ListItem.Content>
        <View style={ListTitleStyles.mainRowContainer}>
          <View style={ListTitleStyles.labelContainer}>
            <Text text={label} textStyle={ListTitleStyles.txtLabel} />

            {required && (
              <Text text="*" textStyle={ListTitleStyles.txtRequired} />
            )}
          </View>
        </View>
      </ListItem.Content>
    </ListItem>
  );
};

export default ListTitle;
