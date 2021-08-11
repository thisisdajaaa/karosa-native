/**
 *
 * Delete
 * @format
 *
 */

import React, { FC } from "react";
import { TouchableWithoutFeedback, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Text from "@app/atoms/Text";
import type { PropsType } from "./types";
import DeleteStyles from "./styles";

const Delete: FC<PropsType> = (props) => {
  const { onPress } = props;

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={DeleteStyles.container}>
        <View style={DeleteStyles.secondaryContainer}>
          <MaterialCommunityIcons name="delete" size={28} color="#0AA351" />
          <Text textStyle={DeleteStyles.txtDelete} text={"Delete"} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Delete;
